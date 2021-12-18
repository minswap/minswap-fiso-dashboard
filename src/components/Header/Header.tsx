import * as React from 'react';
import Link from 'next/link';

import { IconButton } from '../IconButton';
import { LogoIcon } from '../icons';

type Props = {
  menuIcon: React.ReactNode;
  onMenuButtonClick: () => void;
};

export function Header({ menuIcon, onMenuButtonClick }: Props) {
  function handleMenuButtonClick() {
    onMenuButtonClick();
  }

  return (
    <>
      <header className="flex z-40 gap-x-2 items-center py-2 px-5 bg-white shadow-sm lg:px-7">
        <IconButton aria-label="Menu" className="lg:hidden" size="lg" onClick={handleMenuButtonClick}>
          {menuIcon}
        </IconButton>

        <Link href="/">
          <a className="flex gap-x-2 items-center">
            <LogoIcon />
            <span className="text-2xl font-bold leading-none sr-only lg:not-sr-only">Minswap</span>
          </a>
        </Link>
      </header>
    </>
  );
}
