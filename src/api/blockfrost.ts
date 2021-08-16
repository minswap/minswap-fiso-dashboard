import { PARTNERS } from 'src/data/partners';

type Response = {
  hex: string;
  live_stake: string;
};

export async function getLiveStake(): Promise<Record<string, number>> {
  const apiKey = process.env['BLOCKFROST_API_KEY'];
  if (apiKey === undefined) {
    throw new Error('API Key not found');
  }
  const requests: Promise<Response>[] = PARTNERS.map((p) =>
    fetch(`https://cardano-mainnet.blockfrost.io/api/v0/pools/${p.id}`, {
      headers: {
        project_id: apiKey,
      },
    }).then((res) => res.json()),
  );
  const responses: Response[] = await Promise.all(requests);
  const liveStake: Record<string, number> = responses.reduce<Record<string, number>>((map, res) => {
    map[res.hex] = parseInt(res.live_stake, 10) / 1_000_000;
    return map;
  }, {});

  return liveStake;
}
