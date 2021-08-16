import * as React from 'react';

import { IconProps } from './props';

export function InfoIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M12 2c5.52.006 9.994 4.48 10 10 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.667c-4.602 0-8.333 3.73-8.333 8.333 0 4.602 3.73 8.333 8.333 8.333 4.6-.005 8.328-3.733 8.333-8.333 0-4.602-3.73-8.333-8.333-8.333zm0 6.666c.92 0 1.667.747 1.667 1.667v5c0 .46-.373.833-.834.833-.46 0-.833-.373-.833-.833v-5h-.833c-.46 0-.834-.373-.834-.833 0-.46.373-.834.834-.834zm0-4.166c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
                fill="currentColor"
                fillRule="nonzero"
                transform="translate(-340 -424) translate(20 110) translate(320 314)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
