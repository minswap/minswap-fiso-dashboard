import * as React from 'react';
import { Dialog } from '@headlessui/react';

import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';

type Props = {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  rightButton?: React.ReactNode;
  onRightButtonClick?: () => void;
};

export function ModalHeader({ title, icon, rightButton, onRightButtonClick }: Props) {
  return (
    <div className="flex items-center px-5 py-4 font-bold text-gray-700">
      <div className="flex items-center flex-1 gap-x-2">
        {icon}
        <Dialog.Title>{title}</Dialog.Title>
      </div>
      {rightButton ?? (
        <IconButton aria-label="Close" size="sm" onClick={onRightButtonClick}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
}
