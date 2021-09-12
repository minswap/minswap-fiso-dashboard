import { getLiveStake } from './poolpm';

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

export async function getStakePools(): Promise<StakePool> {
  const response = await fetch('https://api.minswap.org/fiso/stake-pools');
  if (response.ok) {
    const body: Response = await response.json();
    let totalStake = 0;
    const liveStake: Record<string, number> = body.data.reduce<Record<string, number>>((map, res) => {
      const liveStake = res.liveStake / 1_000_000;
      map[res.name] = liveStake;
      totalStake += liveStake;
      return map;
    }, {});
    if (totalStake > 0) {
      return {
        totalStake,
        source: 'MinService',
        liveStake,
      };
    }
  }

  // backup when minswap service has problem
  // get stake pools from poolpm
  const liveStake: Record<string, number> = await getLiveStake();
  const totalStake: number = Object.values(liveStake).reduce((sum, x) => sum + x, 0);
  return {
    totalStake,
    source: 'PoolPm',
    liveStake,
  };
}
