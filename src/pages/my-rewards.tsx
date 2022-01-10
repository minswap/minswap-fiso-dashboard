import * as React from 'react';

import { EpochReward, getReward, Reward } from 'src/api/rewards';
import { Button } from 'src/components/Button';
import { ExternallinkIcon, InfoIcon } from 'src/components/icons';
import { Input } from 'src/components/Input';
import { InstructionModal } from 'src/components/InstructionModal';
import { Layout } from 'src/components/Layout';
import { Tooltip } from 'src/components/Tooltip';
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
  const [showTooltip, setTooltip] = React.useState(false);

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

  React.useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setTooltip(false);
      }, 1000);
    }
  }, [showTooltip]);

  return (
    <Layout>
      <div className="flex-1 w-full lg:w-auto">
        <div className="py-4 px-3 mx-5 bg-white rounded-3xl divide-y divide-opacity-10 shadow-md lg:py-6 lg:px-8 lg:mx-8 divide-secondary">
          <div className="pb-3 lg:pb-5">
            <div className="text-xl font-bold">My FISO rewards</div>
            <div className="text-base opacity-60">
              You get the 25% bonus
              <span className="opacity-100"> 🔥 </span>
              from the 11<sup>th</sup> epoch onwards (inclusive) and we will be distributed alongside the airdrop at the
              end of the FISO.
              <ul className="ml-1 list-disc list-inside">
                <li>
                  <b>MINt</b>: claimable from <b>13 Dec 2021</b> to <b>11 Mar 2022</b>
                </li>
                <li>
                  <b>MIN</b>: claimable from <b>10 Jan 2022</b> to <b>11 Mar 2022</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 lg:py-7">
            <div className="flex gap-x-2 items-end lg:gap-x-5">
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
                <tr className="border-b border-opacity-10 border-secondary">
                  <td className="py-2 font-bold">MINt</td>
                  <td className="py-2 font-bold">
                    <div className="text-sm font-normal opacity-60">Amount</div>
                    {(reward.mint.amount / oneMillion).toFixed(2)}
                  </td>
                  <td className="py-2">
                    {reward.mint.isClaimed ? (
                      <div className="flex gap-x-1 justify-center items-center font-bold">
                        <span>Claimed</span>
                        <a
                          className="font-semibold dark:text-white text-primary"
                          href={`https://cardanoscan.io/transaction/${reward.mint.txID}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div className="flex gap-x-1 items-center">
                            (View on Cardanoscan
                            <ExternallinkIcon />)
                          </div>
                        </a>
                      </div>
                    ) : (
                      <span>Unclaimed</span>
                    )}
                  </td>
                  {(reward.min.amountClaimable > 0 || !reward.mint.isClaimed) && (
                    <td className="py-4 align-middle" rowSpan={2}>
                      <div className="flex justify-center">
                        <Button size="sm" variant="light" onClick={() => setIsOpenInstruction(true)}>
                          Claim now
                        </Button>
                      </div>
                    </td>
                  )}
                </tr>
                <tr className="border-b border-opacity-10 border-secondary">
                  <td className="pt-2 pb-2 font-bold">MIN</td>
                  <td className="pt-2 pb-2 font-bold">
                    <div className="text-sm font-normal opacity-60">Amount</div>
                    {(reward.min.amount / oneMillion).toFixed(2)}
                  </td>
                  <td className="pt-2 pb-2 font-bold">
                    <div className="flex justify-center items-center space-x-1">
                      <div className="text-sm font-normal opacity-60">Claimable</div>
                      <Tooltip
                        className="bg-solitude"
                        content={`You have claimed ${(reward.min.amountClaimed / oneMillion).toFixed(2)} MIN. 
                      Now, you can claim ${(reward.min.amountClaimable / oneMillion).toFixed(2)} MIN.`}
                        placement="bottom"
                        visible={showTooltip}
                        arrow
                      >
                        <button onClick={() => setTooltip(true)}>
                          <InfoIcon height={16} width={16} />
                        </button>
                      </Tooltip>
                    </div>
                    {(reward.min.amountClaimable / oneMillion).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {reward && (
          <div className="py-4 px-3 m-5 bg-white rounded-3xl divide-y divide-opacity-10 shadow-md lg:py-6 lg:px-8 lg:mx-8 divide-secondary">
            <table className="w-full text-center table-auto">
              <thead>
                <tr className="border-b border-opacity-10 border-secondary">
                  <th className="py-3">Epoch</th>
                  <th>Pool</th>
                  <th>Total delegate</th>
                  <th>MIN reward</th>
                  <th>MINt reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-opacity-10 divide-secondary">
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
