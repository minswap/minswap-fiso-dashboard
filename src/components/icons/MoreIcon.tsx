import * as React from 'react';

import { IconProps } from './props';

export function MoreIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M5 13c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm10 0c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm10 0c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
              fill="currentColor"
              fillRule="nonzero"
              transform="translate(-70 -358) translate(70 358)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
