export type Reward = {
  epoch: number;
  stakeAddr: string;
  poolName: string;
  amountDelegate: number;
  point: number;
  amountMin: number;
  amountMint: number;
  hasSmallestPoolBonus: boolean;
};

export async function getRewards(stakeAddr: string): Promise<Reward[]> {
  const response = await fetch(`https://old-mainnet-api.minswap.org/fiso/rewards/${stakeAddr}`);
  if (!response.ok) {
    throw new Error('Something went wrong.');
  }
  const body: Reward[] = await response.json();
  return body;
}
