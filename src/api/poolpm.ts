import { PARTNERS } from 'src/data/partners';

type Response = {
  poolId: string;
  ticker: string;
  stake: {
    [key: string]: {
      amount: number;
      reward: number;
    };
  };
};

export async function getLiveStake(): Promise<Record<string, number>> {
  const requests: Promise<Response>[] = PARTNERS.map((p) =>
    fetch(`https://pool.pm/stake/${p.id}`)
      .then((res) => res.json())
      .then((stake) => ({
        poolId: p.id,
        ticker: p.ticker,
        stake,
      })),
  );

  const responses: Response[] = await Promise.all(requests);

  const liveStake: Record<string, number> = responses.reduce<Record<string, number>>((map, res) => {
    const totalStake: number = Object.values(res.stake).reduce<number>((sum, o) => sum + o.amount + o.reward, 0);
    map[res.ticker] = totalStake / 1_000_000;
    return map;
  }, {});

  return liveStake;
}
