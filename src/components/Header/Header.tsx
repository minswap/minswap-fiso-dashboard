import * as React from 'react';
import Link from 'next/link';

import { LogoIcon } from '../icons';

export function Header() {
  return (
    <>
      <header className="z-40 flex items-center px-5 py-2 bg-white shadow-sm lg:px-7 gap-x-2">
        <Link href="/">
          <a className="flex items-center gap-x-2">
            <LogoIcon />
            <span className="text-2xl font-bold leading-none sr-only lg:not-sr-only">Minswap</span>
          </a>
        </Link>
      </header>
    </>
  );
}
