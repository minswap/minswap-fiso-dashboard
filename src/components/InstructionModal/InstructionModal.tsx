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
  'addr_test1qpuvv4e4hmq7f3dsc3enhtdwdlq2gdzescmw662s33zpl7jkp4ml6uwe6ee7z9ck0ujszg3yr4smgz9jhkrrvp3mq77qfvj9en';

const DynamicQrCode = dynamic<any>(() => import('../QrCode').then((mod) => mod.QrCode), { ssr: false });

export function InstructionModal({ isOpen, onClose }: Props): React.ReactElement<Props> {
  const [addressRef, setAddressRef] = React.useState<HTMLDivElement | null>(null);
  const [showCopiedTooltip, setShowCopiedTooltip] = React.useState(false);
  const [textWidth, setTextWidth] = React.useState(0);
  const [renderingText, setRenderingText] = React.useState('');

  const calculateRenderingText = React.useCallback(() => {
    if (addressRef && textWidth) {
      const charWidth = Math.ceil(textWidth / MIN_WALLET.length);
      const addressWidth = parseFloat(window.getComputedStyle(addressRef).width);
      const sliceIndex = Math.round(addressWidth / charWidth) / 2;
      setRenderingText(`${MIN_WALLET.slice(0, sliceIndex)}...${MIN_WALLET.slice(-sliceIndex + 3)}`);
      return;
    }

    setRenderingText('');
  }, [addressRef, textWidth]);

  React.useLayoutEffect(() => {
    const div = document.createElement('div');
    div.style.width = 'fit-content';
    div.textContent = MIN_WALLET;
    document.body.appendChild(div);
    const divWidth = parseFloat(window.getComputedStyle(div).width);
    setTextWidth(divWidth);
    div.remove();
  }, []);

  React.useEffect(() => {
    calculateRenderingText();

    window.addEventListener('resize', calculateRenderingText);

    return () => {
      window.removeEventListener('resize', calculateRenderingText);
    };
  }, [calculateRenderingText]);

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
          <ModalTitle className="flex-1 text-lg font-bold text-left">Claim information</ModalTitle>

          <IconButton aria-label="Close" size="sm" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="pt-5">
          <div className="float-left mr-4 border">
            <DynamicQrCode paymentAddress={MIN_WALLET} />
          </div>

          <div>
            <span>Before claiming please ensure the following:</span>
            <ol className="list-decimal list-inside">
              <li>
                You are using a <b>Cardano native</b> wallet that accepts Cardano native tokens like Yoroi, Nami,
                Daedalus,... If you send ADA from exchanges, you <b>will not</b> receive MIN and MINt tokens.
              </li>
              <li>
                Send <b>exactly</b> 2 ADA to the Minswap wallet with the wallet you used to stake to FISO. Your MINt
                along with 1.5 ADA will be sent back to your wallet shortly after.
              </li>
            </ol>
            <br />
            <div>
              <b>Important:</b> Please consult your local tax advisor for the tax implication of claiming token airdrop!
              <br />
              <b>Note:</b> Any surplus amount above 2 ADA or amount below 2 ADA sent will be treated as donation for
              Minswap team.
            </div>
          </div>
        </div>

        <div className="flex items-center px-4 py-2 bg-opacity-50 border-none bg-solitude rounded-2xl gap-x-2">
          <div className="w-full overflow-hidden whitespace-nowrap" ref={setAddressRef}>
            {renderingText}
          </div>

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
