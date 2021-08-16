import * as React from 'react';

import { IconProps } from './props';

export function SwapIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M7.755 14.304c.39-.405 1.024-.405 1.414 0l.087.102c.133.18.207.402.207.631 0 .275-.106.539-.294.733l-3.616 3.748H26c.552 0 1 .464 1 1.037l-.006.113c-.054.52-.479.923-.994.923H5.614L9.17 25.28c.39.405.39 1.06 0 1.466l-.094.086c-.392.316-.96.287-1.32-.086l-3.878-4.02c-1.169-1.217-1.17-3.183-.001-4.4zm13.17-11.087c.392-.315.96-.287 1.32.085l3.878 4.006c1.169 1.212 1.17 3.17.001 4.383l-3.88 4.007c-.39.403-1.023.403-1.413 0l-.087-.103c-.133-.18-.207-.4-.207-.628 0-.274.106-.537.294-.73l3.616-3.735H4c-.552 0-1-.462-1-1.032l.006-.113c.054-.517.479-.92.994-.92h20.386L20.83 4.763c-.39-.403-.39-1.057 0-1.46z"
              fill="currentColor"
              fillRule="nonzero"
              transform="translate(-70 -160) translate(70 160)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
