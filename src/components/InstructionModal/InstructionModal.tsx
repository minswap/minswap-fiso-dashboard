import * as React from 'react';
import dynamic from 'next/dynamic';

import { IconButton } from '../IconButton';
import { CloseIcon, CopyIcon } from '../icons';
import { Modal, ModalContent, ModalTitle } from '../Modal';
import { Tooltip } from '../Tooltip';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MIN_WALLET =
  'addr_test1qquazwmva2j04eh5g603u7n4ztv9tp7l99t6v7zk6hn77hrm6m7xe8g3yylksua66hdvfut677jh5nyahtr6els5ym0sl4pgjs';

const DynamicQrCode = dynamic<any>(() => import('../QrCode').then((mod) => mod.QrCode), { ssr: false });

export function InstructionModal({ isOpen, onClose }: Props): React.ReactElement<Props> {
  const [showCopiedTooltip, setShowCopiedTooltip] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(MIN_WALLET);
    setShowCopiedTooltip(true);
  }

  React.useEffect(() => {
    if (showCopiedTooltip) {
      setTimeout(() => {
        setShowCopiedTooltip(false);
      }, 1000);
    }
  }, [showCopiedTooltip]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className="p-5 max-w-lg flex flex-col overflow-y-auto gap-y-4 max-h-[50rem] divide-y divide-opacity-10 divide-secondary">
        <div className="flex items-center px-2 gap-x-2">
          <ModalTitle className="flex-1 text-lg font-bold text-left">Minwallet information</ModalTitle>

          <IconButton aria-label="Close" size="sm" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="pt-5">
          <div className="float-left mr-4 border">
            <DynamicQrCode paymentAddress={MIN_WALLET} />
          </div>

          <div>
            <span>Before claiming the MIN tokens please ensure the following:</span>
            <ul className="list-disc list-inside">
              <li>
                You are using a <b>Shelly-Era</b> wallet.
              </li>
              <li>
                Don&apos;t using <b>Byron-Era</b> wallet, you will not receive MIN tokens.
              </li>
              <li>
                Send <b>exactly</b> 2 ADA to the Min&apos;s wallet with the wallet you use to stake MIN tokens before.
                Your MINt and 1.5 ADA will be sent back to your wallet shortly after.
              </li>
            </ul>
            <div>
              <b>Note:</b> Any amount above or below 2 ADA sent will be treated for the Min team.
            </div>
          </div>
        </div>

        <div className="flex items-center px-4 py-2 bg-opacity-50 border-none bg-solitude rounded-2xl gap-x-2">
          <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">{MIN_WALLET}</div>

          <Tooltip content="Copied" placement="top" visible={showCopiedTooltip}>
            <button className="p-3 text-sm align-middle bg-white rounded-xl" onClick={handleCopy}>
              <CopyIcon />
            </button>
          </Tooltip>
        </div>
      </ModalContent>
    </Modal>
  );
}
