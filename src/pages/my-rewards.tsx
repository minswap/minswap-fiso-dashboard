import * as React from 'react';

import { getRewards, Reward } from 'src/api/rewards';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { Layout } from 'src/components/Layout';
import { RustModule } from 'src/rust-module';

export default function DashboardPage(): React.ReactElement {
  const [address, setAddress] = React.useState<string>('');
  const [errMessage, setErrMessage] = React.useState<string>('');
  const [rewards, setRewards] = React.useState<Reward[]>();
  const [minReward, setMinReward] = React.useState<number>(0);
  const [mintReward, setMintReward] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useMemo(() => {
    rewards?.map((reward: Reward) => {
      setMinReward(minReward + reward.amountMin);
      setMintReward(mintReward + reward.amountMint);
    });
  }, [rewards]);

  function handleGetRewards() {
    setRewards([]);
    setIsLoading(true);
    getRewards(address)
      .then((res) => setRewards(res))
      .finally(() => setIsLoading(false));
  }

  async function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      // TODO: validate address, if input value is wallet address then convert to stake address
      handleGetRewards();
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value.trim().toLowerCase());
  }

  return (
    <Layout>
      <div className="flex-1 w-full px-8 py-6 mx-8 bg-white divide-y shadow-md divide-secondary divide-opacity-10 rounded-3xl lg:w-auto">
        <div className="pb-5 text-xl font-bold">My FISO rewards</div>

        <div className="pb-7 pt-7">
          <div className="flex items-end gap-x-5">
            <Input
              className="w-[460px]"
              label="Enter your address"
              placeholder="Enter your stake address"
              value={address}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              className="px-8"
              disabled={address.length < 1}
              isLoading={isLoading}
              size="sm"
              onClick={handleGetRewards}
            >
              Apply
            </Button>
          </div>
          {errMessage && <span className="w-full text-sm text-left text-redOrange pl-[10px]">{errMessage}</span>}
        </div>

        <table className="w-full text-center table-auto">
          <thead>
            <tr className="border-b border-secondary border-opacity-10">
              <th className="py-3">Epoch</th>
              <th>Pool</th>
              <th>Total delegate</th>
              <th>Min reward</th>
              <th>Mint reward</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary divide-opacity-10">
            {rewards?.map((reward: Reward) => (
              <tr key={reward.epoch}>
                <td className="py-3">{reward.epoch}</td>
                <td>{reward.poolName}</td>
                <td>{reward.amountDelegate.toFixed(2)}</td>
                <td>{reward.amountMin.toFixed(2)}</td>
                <td>{reward.amountMint.toFixed(2)}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td colSpan={2}></td>
              <td className="pt-3">Total</td>
              <td>{minReward.toFixed(2)}</td>
              <td>{mintReward.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
