import * as React from 'react';

import { IconProps } from './props';

export function MoonIcon({ color = '#fff', opacity = 1 }: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd" opacity={opacity}>
        <g fill={color} fillRule="nonzero">
          <g>
            <g>
              <path
                d="M19.804 12.48c-.182-.182-.452-.243-.695-.156-3.255 1.16-6.888.342-9.332-2.102C7.333 7.778 6.516 4.146 7.677.89c.086-.242.025-.512-.157-.694-.181-.182-.452-.244-.694-.158-1.438.508-2.743 1.334-3.818 2.415-4.012 4.015-4.01 10.522.003 14.536 4.014 4.014 10.52 4.015 14.536.003 1.082-1.075 1.907-2.38 2.415-3.818.086-.243.024-.513-.158-.694z"
                transform="translate(-1159.000000, -20.000000) translate(1123.000000, 20.000000) translate(36.000000, 0.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
