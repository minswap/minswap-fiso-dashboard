import * as React from 'react';

import { IconProps } from './props';

export function ArrowLeftIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M.877 8.724l3.878 4.02c.39.405 1.024.405 1.414 0 .39-.404.39-1.06 0-1.465L2.614 7.59H23c.552 0 1-.464 1-1.036 0-.573-.448-1.037-1-1.037H2.553L6.17 1.77c.188-.194.294-.458.294-.733 0-.275-.106-.539-.294-.733-.39-.405-1.023-.405-1.414 0l-3.88 4.02c-1.167 1.218-1.167 3.184.002 4.4z"
                transform="translate(-630 -120) translate(630 120) translate(3 8)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
