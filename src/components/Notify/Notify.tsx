import * as React from 'react';

import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { CloseIcon, DarkMincatErrorIcon, DarkMincatSuccessIcon, MincatErrorIcon, MincatSuccessIcon } from '../icons';
import { Modal, ModalContent, ModalTitle } from '../Modal';

export enum NotifyType {
  TX_SUBMITTED = 'TX_SUBMITTED',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

interface Props {
  isOpen: boolean;
  title?: string;
  content: React.ReactNode;
  type?: NotifyType;
  onClose: () => void;
}

export function Notify({
  isOpen,
  title = 'Notify',
  content,
  type = NotifyType.SUCCESS,
  onClose,
}: Props): React.ReactElement<Props> {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  function getIcon(): React.ReactNode {
    switch (type) {
      case NotifyType.TX_SUBMITTED:
      case NotifyType.SUCCESS:
        return (
          <>
            <div className="hidden dark:flex">
              <DarkMincatSuccessIcon />
            </div>
            <div className="dark:hidden">
              <MincatSuccessIcon />
            </div>
          </>
        );
      case NotifyType.FAIL:
        return (
          <>
            <div className="hidden dark:flex">
              <DarkMincatErrorIcon />
            </div>
            <div className="dark:hidden">
              <MincatErrorIcon />
            </div>
          </>
        );
    }
  }

  return (
    <Modal initialFocus={buttonRef} isOpen={isOpen} onClose={onClose}>
      <ModalContent className="p-5 max-w-md flex flex-col overflow-y-auto dark:bg-blackRussian dark:divide-opacity-10 dark:divide-white gap-y-6 max-h-[50rem] divide-y divide-opacity-10 divide-secondary">
        <div className="flex gap-x-2 items-center px-2">
          <ModalTitle className="flex-1 text-lg font-bold text-left">{title}</ModalTitle>

          <IconButton aria-label="Close" size="sm" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div>
          <div className="flex justify-center">{getIcon()}</div>

          <div className="mb-24 text-base text-center">{content}</div>

          <Button
            ref={buttonRef}
            size="md"
            variant={type === NotifyType.FAIL ? 'secondary' : 'primary'}
            isFullWidth
            onClick={onClose}
          >
            {type === NotifyType.FAIL ? 'Dismiss' : 'Done'}
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
}
