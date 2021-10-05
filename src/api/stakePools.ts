import * as PoolPm from './poolpm';

export type StakePool = {
  totalStake: number;
  source: 'MinService' | 'PoolPm';
  liveStake: Record<string, number>;
};

type Response = {
  totalStake: number;
  data: {
    id: string;
    name: string;
    liveStake: number;
  }[];
};

async function getStakePoolsFromMinswap(): Promise<StakePool> {
  const response = await fetch('https://api.minswap.org/fiso/stake-pools');
  if (!response.ok) {
    try {
      const data = await response.json();
      throw new Error(data.message);
    } catch (err) {
      const message = await response.text();
      throw new Error(message);
    }
  }

  const body: Response = await response.json();
  let totalStake = 0;
  const liveStake: Record<string, number> = body.data.reduce<Record<string, number>>((map, res) => {
    const liveStake = res.liveStake / 1_000_000;
    map[res.name] = liveStake;
    totalStake += liveStake;
    return map;
  }, {});

  if (totalStake <= 0) {
    throw new Error(`Expect total stake to be positive, got ${totalStake}`);
  }

  return {
    totalStake,
    source: 'MinService',
    liveStake,
  };
}

async function getStakePoolsFromPoolPm(): Promise<StakePool> {
  const liveStake: Record<string, number> = await PoolPm.getLiveStake();
  const totalStake: number = Object.values(liveStake).reduce((sum, x) => sum + x, 0);
  return {
    totalStake,
    source: 'PoolPm',
    liveStake,
  };
}

export async function getStakePools(): Promise<StakePool> {
  if (process.env['NEXT_PUBLIC_USE_POOLPM'] === 'true') {
    return getStakePoolsFromPoolPm();
  }

  try {
    const result = await getStakePoolsFromMinswap();
    return result;
  } catch (err) {
    console.error(err);
    // backup when minswap service has problem
    return getStakePoolsFromPoolPm();
  }
}
