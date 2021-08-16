import * as React from 'react';

import { IconProps } from './props';

export function TwitterIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="17" viewBox="0 0 20 17" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".6">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <g>
                <path
                  d="M20 1.894c-.744.321-1.536.534-2.363.638.85-.5 1.5-1.285 1.804-2.232-.792.466-1.667.794-2.6.978C16.09.488 15.016 0 13.846 0 11.576 0 9.75 1.814 9.75 4.038c0 .32.027.628.095.92C6.435 4.796 3.419 3.187 1.393.737 1.038 1.34.83 2.032.83 2.776c0 1.399.732 2.638 1.821 3.356-.658-.013-1.305-.2-1.852-.498v.045C.8 7.64 2.221 9.27 4.085 9.646c-.334.09-.697.132-1.075.132-.262 0-.527-.014-.776-.068.531 1.598 2.038 2.774 3.831 2.812-1.395 1.074-3.166 1.722-5.084 1.722-.336 0-.658-.015-.981-.056C1.816 15.342 3.969 16 6.29 16c7.545 0 11.67-6.154 11.67-11.488 0-.178-.006-.35-.015-.522.814-.568 1.497-1.279 2.055-2.096z"
                  transform="translate(-58 -417) translate(36 388) translate(22 28.927) translate(0 1)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
