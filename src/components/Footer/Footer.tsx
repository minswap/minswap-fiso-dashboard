import * as React from 'react';

import { DiscordIcon, TwitterIcon } from '../icons';

export function Footer(): React.ReactElement {
  return (
    <footer className="hidden items-center py-2 px-7 lg:flex font-san">
      <span className="py-1 px-2 hover:bg-opacity-10 hover:rounded-md hover:bg-secondary">
        <a aria-label="Discord" href="https://discord.gg/ZjB8ZBhkbm" rel="noreferrer noopener" target="_blank">
          <DiscordIcon />
        </a>
      </span>

      <span className="py-1 px-2 hover:bg-opacity-10 hover:rounded-md hover:bg-secondary">
        <a aria-label="Twitter" href="https://twitter.com/MinswapDEX" rel="noreferrer noopener" target="_blank">
          <TwitterIcon />
        </a>
      </span>
    </footer>
  );
}
