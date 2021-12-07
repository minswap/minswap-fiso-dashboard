export type Reward = {
  epochRewards: EpochReward[];
  min: ClaimRewardInfomation;
  mint: ClaimRewardInfomation;
};

export type EpochReward = {
  epoch: number;
  stakeAddr: string;
  poolName: string;
  amountDelegate: number;
  point: number;
  amountMin: number;
  amountMint: number;
  hasSmallestPoolBonus: boolean;
};

export type ClaimRewardInfomation = {
  amount: number;
  txID: string;
  isClaimed: boolean;
};

export async function getReward(stakeAddr: string): Promise<Reward> {
  const response = await fetch(`https://api-testnet.minswap.org/fiso/rewards/${stakeAddr}`);
  if (!response.ok) {
    throw new Error('Something went wrong.');
  }
  const body: Reward = await response.json();
  return body;
}
