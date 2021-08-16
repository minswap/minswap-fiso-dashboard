import * as React from 'react';

import { IconProps } from './props';

export function ChevronupIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M11.69 7.447L7.1 2.861c-.395-.358-1.001-.342-1.378.035-.376.378-.39.984-.032 1.38l4.586 4.585c.39.39.39 1.024 0 1.414L5.69 14.861c-.39.39-.39 1.024 0 1.415.391.39 1.024.39 1.415 0l4.585-4.587c1.171-1.171 1.171-3.07 0-4.242z"
                fill="#2F45C5"
                fillRule="nonzero"
                transform="translate(-1302 -336) translate(320 100) rotate(-180 500 127) rotate(90 8.983 9.586)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
