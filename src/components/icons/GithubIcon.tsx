import * as React from 'react';

import { IconProps } from './props';

export function GithubIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".6">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <g>
                <path
                  d="M10 0C4.475 0 0 4.362 0 9.741c0 4.305 2.865 7.955 6.838 9.242.5.092.683-.21.683-.468 0-.231-.008-.844-.013-1.656-2.781.587-3.368-1.307-3.368-1.307-.455-1.125-1.112-1.425-1.112-1.425-.906-.604.07-.592.07-.592 1.004.068 1.531 1.004 1.531 1.004.892 1.49 2.341 1.059 2.913.81.09-.63.347-1.059.633-1.302-2.22-.244-4.555-1.082-4.555-4.814 0-1.063.388-1.932 1.03-2.614-.113-.246-.45-1.236.087-2.578 0 0 .837-.26 2.75.999.8-.217 1.65-.324 2.5-.329.85.005 1.7.112 2.5.329 1.9-1.26 2.737-.999 2.737-.999.538 1.342.2 2.332.1 2.578.638.682 1.025 1.55 1.025 2.614 0 3.742-2.337 4.566-4.562 4.805.35.293.675.89.675 1.803 0 1.303-.013 2.35-.013 2.667 0 .255.175.56.688.463 4-1.279 6.863-4.932 6.863-9.23C20 4.361 15.523 0 10 0z"
                  transform="translate(-56 -495) translate(36 388) translate(20 106.927) translate(0 1)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
