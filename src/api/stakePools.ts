import { getLiveStake } from './poolpm';

type Response = {
  totalStake: number;
  data: {
    id: string;
    name: string;
    liveStake: number;
  }[];
};

export async function getStakePools(): Promise<[Record<string, number>, number]> {
  const response = await fetch('https://dev.api.minswap.org/fiso/stake-pools');
  if (response.ok) {
    const body: Response = await response.json();
    const totalStake: number = body.totalStake / 1_000_000;
    const liveStake: Record<string, number> = body.data.reduce<Record<string, number>>((map, res) => {
      map[res.name] = res.liveStake / 1_000_000;
      return map;
    }, {});
    return [liveStake, totalStake];
  }

  // backup when minswap service has problem
  // get stake pools from poolpm
  const liveStake: Record<string, number> = await getLiveStake();
  const totalStake: number = Object.values(liveStake).reduce((sum, x) => sum + x, 0);
  return [liveStake, totalStake];
}
