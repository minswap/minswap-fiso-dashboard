import * as React from 'react';
import { Dialog } from '@headlessui/react';
import classnames from 'classnames';
import { AnimatePresence, m } from 'framer-motion';

import { Overlay } from '../Overlay';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
}

export function Modal({ children, isOpen, onClose, className, initialFocus }: Props): React.ReactElement<Props> {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <Dialog
          animate={{ opacity: 1 }}
          as={m.div}
          className={classnames('fixed inset-0 z-40 px-5 py-12 md:py-24 sm:px-6', className)}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          initialFocus={initialFocus}
          open={isOpen}
          transition={{ duration: 0.15 }}
          static
          onClose={onClose}
        >
          <Dialog.Overlay as={Overlay} className="-z-1" />
          {children}
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}

export const ModalTitle = Dialog.Title;
