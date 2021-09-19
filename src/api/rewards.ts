export type Reward = {
  epoch: number;
  stakeAddr: string;
  poolName: string;
  amountDelegate: number;
  point: number;
  amountMin: number;
  amountMint: number;
};

export async function getRewards(stakeAddr: string): Promise<Reward[]> {
  const response = await fetch(`https://api.minswap.org/fiso/rewards/${stakeAddr}`);
  const body: Reward[] = await response.json();
  return body;
}
