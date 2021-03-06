import * as React from 'react';

import { IconProps } from './props';

export function DiscordIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="16" viewBox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".6">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <g>
                <path
                  d="M8.003 0l.204.2C4.862.996 3.344 2.485 3.344 2.485c.156-.033 6.912-3.915 15.098.098 0 0-1.52-1.392-4.66-2.283l.278-.272c.434.001 2.73.081 5.19 1.872 0 0 .105.18.275.512l.11.218C20.39 4.16 22 7.932 22 12.33c-.091-.11-1.707 2.475-5.864 2.564 0 0-.704-.793-1.205-1.486 2.431-.695 3.341-2.086 3.341-2.086-4.733 2.969-8.882 2.505-13.845.5-.046 0-.067-.021-.09-.045v-.009c-.024-.022-.045-.045-.092-.045h-.089c-.304-.199-.507-.297-.507-.297s.908 1.391 3.243 2.086C6.279 14.208 5.672 15 5.672 15c-3.943-.093-5.51-2.425-5.66-2.664L0 12.316c0-5.758 2.734-10.43 2.734-10.43C5.09.18 7.295.015 7.863 0h.14zm6.383 6.558v.005c-1.056 0-1.921.888-1.924 1.987 0 1.09.864 1.982 1.924 1.982s1.925-.891 1.925-1.99c0-1.093-.86-1.984-1.925-1.984zm-6.883 0l-.006.005c-1.06 0-1.924.888-1.924 1.987 0 1.09.864 1.982 1.924 1.982 1.061 0 1.925-.891 1.925-1.99 0-1.093-.858-1.984-1.919-1.984z"
                  transform="translate(-57 -454) translate(36 388) translate(21 63.927) translate(0 3)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
