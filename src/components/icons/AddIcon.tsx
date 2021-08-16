import * as React from 'react';

import { IconProps } from './props';

export function AddIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="24" viewBox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g fill="currentColor" fillRule="nonzero" stroke="currentColor">
              <path
                d="M13.83.17h0c-.229-.227-.598-.227-.826 0L7 6.176.996.171C.768-.057.399-.057.17.17h0c-.228.228-.228.597 0 .825L6.175 7 .171 13.004c-.228.228-.228.597 0 .825h0c.228.228.597.228.825 0L7 7.825l6.004 6.004c.228.228.597.228.825 0h0c.228-.228.228-.597 0-.825L7.825 7 13.829.996c.228-.228.228-.597 0-.825z"
                transform="translate(-837 -358) translate(837.5 358) rotate(45 3.464 15.536)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
