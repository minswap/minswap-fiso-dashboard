import * as React from 'react';

import { IconProps } from './props';

export function LiquidityIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M20.583 17H5.417C2.427 16.996.004 14.62 0 11.687V5.314C.004 2.38 2.427.003 5.417 0h15.166c2.99.004 5.413 2.38 5.417 5.313v6.375c-.004 2.932-2.427 5.308-5.417 5.312zM5.417 2.125c-1.795 0-3.25 1.427-3.25 3.188v6.375c0 1.76 1.455 3.187 3.25 3.187h15.166c1.795 0 3.25-1.427 3.25-3.188V5.314c0-1.76-1.455-3.188-3.25-3.188H5.417zM13 13.6c-2.393 0-4.333-1.903-4.333-4.25S13 2.558 13 2.558s4.333 4.445 4.333 6.792c0 1.127-.456 2.208-1.269 3.005-.813.797-1.915 1.245-3.064 1.245zm0-7.68s-2.167 2.256-2.167 3.43c0 1.174.97 2.125 2.167 2.125 1.197 0 2.167-.951 2.167-2.125S13 5.92 13 5.92zM5.417 4.25c-.599 0-1.084.476-1.084 1.063 0 .586.485 1.062 1.084 1.062.598 0 1.083-.476 1.083-1.063 0-.586-.485-1.062-1.083-1.062zM19.5 5.313c0 .586.485 1.062 1.083 1.062.599 0 1.084-.476 1.084-1.063 0-.586-.485-1.062-1.084-1.062-.598 0-1.083.476-1.083 1.063zM5.417 10.625c-.599 0-1.084.476-1.084 1.063 0 .586.485 1.062 1.084 1.062.598 0 1.083-.476 1.083-1.063 0-.586-.485-1.062-1.083-1.062zM19.5 11.688c0 .586.485 1.062 1.083 1.062.599 0 1.084-.476 1.084-1.063 0-.586-.485-1.062-1.084-1.062-.598 0-1.083.476-1.083 1.063z"
                transform="translate(-70 -226) translate(70 226) translate(2 7)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
