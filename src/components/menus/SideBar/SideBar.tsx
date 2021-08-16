import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

import { SideBarContent } from './SideBarContent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SideBar({ isOpen, onClose }: Props): React.ReactElement<Props> {
  function handleOverlayClick() {
    onClose();
  }

  return <AnimatePresence>{isOpen ? <SideBarContent onOverlayClick={handleOverlayClick} /> : null}</AnimatePresence>;
}
