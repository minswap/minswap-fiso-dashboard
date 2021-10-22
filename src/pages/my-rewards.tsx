import * as React from 'react';

import { getRewards, Reward } from 'src/api/rewards';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { Layout } from 'src/components/Layout';
import { paymentAddrToStakeAddr } from 'src/utils';

const paymentAddrRegExp = new RegExp('^addr[a-z0-9]{99}$');
const stakeAddrRegExp = new RegExp('^stake[a-z0-9]{54}$');

export default function DashboardPage(): React.ReactElement {
  const [address, setAddress] = React.useState<string>('');
  const [errMessage, setErrMessage] = React.useState<string>('');
  const [rewards, setRewards] = React.useState<Reward[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [totalMinReward, totalMintReward] = React.useMemo(() => {
    let totalMin = 0,
      totalMint = 0;
    rewards?.forEach((item) => {
      totalMin += item.amountMin;
      totalMint += item.amountMint;
    });
    return [totalMin, totalMint];
  }, [rewards]);

  async function handleGetRewards() {
    setRewards([]);
    setIsLoading(true);
    setErrMessage('');
    try {
      let stakeAddr = '';
      if (paymentAddrRegExp.test(address)) {
        stakeAddr = await paymentAddrToStakeAddr(address);
      } else if (stakeAddrRegExp.test(address)) {
        stakeAddr = address;
      } else {
        throw new Error('Address must be payment address or stake address');
      }
      const rewards = await getRewards(stakeAddr);
      setRewards(rewards);
    } catch (error: any) {
      setErrMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleGetRewards();
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value.trim().toLowerCase());
  }

  return (
    <Layout>
      <div className="flex-1 w-full px-3 py-4 mx-5 bg-white divide-y shadow-md lg:mx-8 lg:py-6 lg:px-8 divide-secondary divide-opacity-10 rounded-3xl lg:w-auto">
        <div className="pb-3 lg:pb-5">
          <div className="text-xl font-bold">My FISO rewards</div>
          <div className="pt-2 text-base opacity-60">Reward calculation is delayed by 2 epochs.</div>
          <div className="text-base opacity-60">
            You get the 25% bonus
            <span className="opacity-100"> 🔥 </span>
            from the 11<sup>th</sup> epoch onwards (inclusive) and we will be distributed alongside the airdrop at the
            end of the FISO.
          </div>
        </div>

        <div className="py-4 lg:py-7">
          <div className="flex items-end lg:gap-x-5 gap-x-2">
            <Input
              className="lg:w-[460px]"
              label="Enter your address"
              placeholder="Enter your payment address or stake address"
              value={address}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              className="px-6 lg:px-8"
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

        {totalMinReward !== 0 && (
          <table className="w-full text-center table-auto">
            <thead>
              <tr className="font-bold border-b">
                <td colSpan={2}></td>
                <td className="py-3">Total</td>
                <td className="py-3">{totalMinReward.toFixed(2)}</td>
                <td className="py-3">{totalMintReward.toFixed(2)}</td>
              </tr>
              <tr className="border-b border-secondary border-opacity-10">
                <th className="py-3">Epoch</th>
                <th>Pool</th>
                <th>Total delegate</th>
                <th>MIN reward</th>
                <th>MINt reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary divide-opacity-10">
              {rewards?.map((reward: Reward) => (
                <tr key={reward.epoch}>
                  <td className="py-3">
                    `${reward.epoch}${reward.hasSmallestPoolBonus ? ` 🔥` : ``}`
                  </td>
                  <td>{reward.poolName}</td>
                  <td>{reward.amountDelegate.toFixed(2)}</td>
                  <td>{reward.amountMin.toFixed(2)}</td>
                  <td>{reward.amountMint.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td colSpan={2}></td>
                <td className="pt-3">Total</td>
                <td className="pt-3">{totalMinReward.toFixed(2)}</td>
                <td className="pt-3">{totalMintReward.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}
