import * as React from 'react';

import { EpochReward, getReward, Reward } from 'src/api/rewards';
import { Button } from 'src/components/Button';
import { ExternallinkIcon } from 'src/components/icons';
import { Input } from 'src/components/Input';
import { InstructionModal } from 'src/components/InstructionModal';
import { Layout } from 'src/components/Layout';
import { paymentAddrToStakeAddr } from 'src/utils';

const paymentAddrRegExp = new RegExp('^addr[a-z0-9]{99}$');
const stakeAddrRegExp = new RegExp('^stake[a-z0-9]{54}$');
const oneMillion = 1_000_000;

export default function DashboardPage(): React.ReactElement {
  const [address, setAddress] = React.useState<string>('');
  const [errMessage, setErrMessage] = React.useState<string>('');
  const [reward, setReward] = React.useState<Reward>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isOpenInstruction, setIsOpenInstruction] = React.useState<boolean>(false);

  async function handleGetRewards() {
    setReward(undefined);
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
      const reward = await getReward(stakeAddr);
      setReward(reward);
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
      <div className="flex-1 w-full lg:w-auto">
        <div className="px-3 py-4 mx-5 bg-white divide-y shadow-md lg:mx-8 lg:py-6 lg:px-8 divide-secondary divide-opacity-10 rounded-3xl ">
          <div className="pb-3 lg:pb-5">
            <div className="text-xl font-bold">My FISO rewards</div>
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

          {reward && (
            <table className="w-full text-center table-auto">
              <tbody>
                <tr className="border-b border-secondary border-opacity-10">
                  <td className="pt-4 pb-2 font-bold">MIN</td>
                  <td className="pt-4 pb-2 font-bold text-right">{(reward.min.amount / oneMillion).toFixed(2)}</td>
                  <td className="pt-4 pb-2">
                    {reward.min.isClaimed ? (
                      <a
                        className="font-semibold text-primary dark:text-white"
                        href={`https://testnet.cardanoscan.io/transaction/${reward.min.txID}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View on Cardanoscan
                      </a>
                    ) : (
                      <span>
                        Claimable from <b>10 Jan 2022</b> to <b>1 Mar 2022</b>
                      </span>
                    )}
                  </td>
                  <td className="py-4 align-middle" rowSpan={2}>
                    <div className="flex justify-center">
                      <Button size="sm" variant="light" onClick={() => setIsOpenInstruction(true)}>
                        Claim now
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-secondary border-opacity-10">
                  <td className="pt-2 pb-4 font-bold">MINt</td>
                  <td className="pt-2 pb-4 font-bold text-right">{(reward.mint.amount / oneMillion).toFixed(2)}</td>
                  <td className="pt-2 pb-4">
                    {!reward.mint.isClaimed ? (
                      <div className="flex items-center justify-center font-bold gap-x-1">
                        <span>Claimed</span>
                        <a
                          className="font-semibold text-primary dark:text-white"
                          href={`https://testnet.cardanoscan.io/transaction/${reward.mint.txID}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div className="flex items-center gap-x-1">
                            (View on Cardanoscan
                            <ExternallinkIcon />)
                          </div>
                        </a>
                      </div>
                    ) : (
                      <span>
                        Claimable from <b>13 Dec 2021</b> to <b>1 Feb 2022</b>
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {reward && (
          <div className="px-3 py-4 m-5 bg-white divide-y shadow-md lg:mx-8 lg:py-6 lg:px-8 divide-secondary divide-opacity-10 rounded-3xl">
            <table className="w-full text-center table-auto">
              <thead>
                <tr className="border-b border-secondary border-opacity-10">
                  <th className="py-3">Epoch</th>
                  <th>Pool</th>
                  <th>Total delegate</th>
                  <th>MIN reward</th>
                  <th>MINt reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary divide-opacity-10">
                {reward.epochRewards.map((epochReward: EpochReward) => (
                  <tr key={epochReward.epoch}>
                    <td className="py-3">
                      {epochReward.epoch}
                      {epochReward.hasSmallestPoolBonus ? ` 🔥` : ``}
                    </td>
                    <td>{epochReward.poolName}</td>
                    <td>{(epochReward.amountDelegate / oneMillion).toFixed(2)}</td>
                    <td>{(epochReward.amountMin / oneMillion).toFixed(2)}</td>
                    <td>{(epochReward.amountMint / oneMillion).toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td colSpan={2}></td>
                  <td className="pt-3">Total</td>
                  <td className="pt-3">{(reward.min.amount / oneMillion).toFixed(2)}</td>
                  <td className="pt-3">{(reward.mint.amount / oneMillion).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <InstructionModal isOpen={isOpenInstruction} onClose={() => setIsOpenInstruction(false)} />
      </div>
    </Layout>
  );
}
