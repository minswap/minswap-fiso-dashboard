import * as React from 'react';

import { DiscordIcon, TwitterIcon } from '../icons';

export function Footer(): React.ReactElement {
  return (
    <footer className="items-center hidden py-2 lg:flex font-san px-7">
      <span className="px-2 py-1 hover:rounded-md hover:bg-secondary hover:bg-opacity-10">
        <a aria-label="Discord" href="https://t.co/lwv9szY861?amp=1" rel="noreferrer noopener" target="_blank">
          <DiscordIcon />
        </a>
      </span>

      <span className="px-2 py-1 hover:rounded-md hover:bg-secondary hover:bg-opacity-10">
        <a aria-label="Twitter" href="https://t.co/lwv9szY861?amp=1" rel="noreferrer noopener" target="_blank">
          <TwitterIcon />
        </a>
      </span>
    </footer>
  );
}
