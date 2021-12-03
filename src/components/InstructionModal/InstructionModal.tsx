import * as React from 'react';
import dynamic from 'next/dynamic';
import { Modal, ModalContent, ModalTitle } from '../Modal';
import { IconButton } from '../IconButton';
import { CloseIcon, CopyIcon } from '../icons';
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
      <ModalContent className="p-5 max-w-lg flex flex-col overflow-y-auto gap-y-6 max-h-[50rem] divide-y divide-opacity-10 divide-secondary">
        <div className="flex items-center px-2 gap-x-2">
          <ModalTitle className="flex-1 text-lg font-bold text-left">Minwallet information</ModalTitle>

          <IconButton aria-label="Close" size="sm" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="pt-5">
          <DynamicQrCode paymentAddress={MIN_WALLET} />
        </div>

        <div className="flex items-center justify-between px-5 py-3 overflow-x-auto bg-coolGray-100 rounded-2xl md:overflow-x-hidden gap-x-4">
          <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">{MIN_WALLET}</span>

          <Tooltip content="Copied" placement="bottom" visible={showCopiedTooltip}>
            <button className="p-3 text-sm bg-white rounded-xl md:text-base" onClick={handleCopy}>
              <CopyIcon />
            </button>
          </Tooltip>
        </div>
      </ModalContent>
    </Modal>
  );
}
