import * as React from 'react';
import { Dialog } from '@headlessui/react';
import classnames from 'classnames';
import { AnimatePresence, m } from 'framer-motion';

import { ModalHeader } from '.';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
  header?: React.ReactNode;
  children: React.ReactNode;
  separateHeader?: boolean;
  title?: string;
  headerIcon?: React.ReactNode;
  className?: string;
  classes?: {
    content?: string;
  };
};

export function Modal({
  isOpen,
  onClose,
  header,
  initialFocus,
  children,
  separateHeader = false,
  title,
  headerIcon,
  className,
  classes,
}: Props) {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <Dialog
          animate={{ opacity: 1 }}
          as={m.div}
          className="flex fixed inset-0 z-50 justify-center items-end pb-0 sm:items-center sm:py-24 sm:pb-24"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          initialFocus={initialFocus}
          open={isOpen}
          transition={{ duration: 0.15 }}
          static
          onClose={onClose}
        >
          <m.div
            animate={{ translateY: '0%' }}
            className={classnames(
              'min-h-[80%] sm:min-h-[500px] z-10 flex flex-col w-full max-h-full bg-white rounded-b-none shadow-2xl rounded-3xl sm:max-w-[450px] sm:rounded-b-3xl',
              className,
            )}
            exit={{ translateY: '100%' }}
            initial={{ translateY: '100%' }}
            transition={{ duration: 0.15 }}
          >
            {header ?? <ModalHeader icon={headerIcon} title={title} onRightButtonClick={onClose} />}
            {separateHeader ? <div className="mx-5 h-px bg-opacity-10 bg-secondary" /> : null}
            <div className={classnames('flex-1 px-5 pb-5 overflow-y-auto min-h-[min-content]', classes?.content)}>
              {children}
            </div>
          </m.div>

          <Dialog.Overlay className="fixed inset-0 bg-opacity-40 bg-primary backdrop-filter backdrop-blur-sm backdrop-opacity-90" />
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}
