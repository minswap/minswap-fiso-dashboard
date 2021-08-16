import * as React from 'react';

import { IconProps } from './props';

export function MenuIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g
              fill="currentColor"
              fillRule="nonzero"
              opacity=".6"
              transform="translate(-20 -15) translate(20 15) translate(3 7)"
            >
              <rect height="2" rx="1" width="24" y="7" />
              <rect height="2" rx="1" width="24" />
              <rect height="2" rx="1" width="24" y="14" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
