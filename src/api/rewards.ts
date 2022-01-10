export type Reward = {
  epochRewards: EpochReward[];
  min: {
    timeClaim: string;
    amount: number;
    amountClaimable: number;
    amountClaimed: number;
    amountRemainder: number;
  };
  mint: {
    amount: number;
    txID: string;
    isClaimed: boolean;
  };
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

export async function getReward(stakeAddr: string): Promise<Reward> {
  const response = await fetch(`https://api-mainnet.minswap.org/fiso/rewards/${stakeAddr}`);
  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }
  const body: Reward = await response.json();
  return body;
}
