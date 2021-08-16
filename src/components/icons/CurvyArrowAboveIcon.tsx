import * as React from 'react';

import { IconProps } from './props';

export function CurvyArrowAboveIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="5" viewBox="0 0 20 5" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="#000" fillRule="nonzero">
          <g>
            <path
              d="M63.913 139c3.59 0 7.178 1.375 9.901 3.75.248.25.248.625 0 .875-.123.125-.247.25-.495.25-.124 0-.247 0-.371-.125-2.475-2.25-5.693-3.5-9.035-3.5-2.769 0-5.537.833-7.833 2.498l2.263.002c.371 0 .619.25.619.625s-.248.625-.619.625H54.63c-.371 0-.619-.25-.619-.625v-.1c-.015-.066-.014-.135-.001-.205l.001-3.445c0-.375.248-.625.619-.625s.619.25.619.625l-.001 2.181c2.457-1.842 5.513-2.806 8.665-2.806z"
              transform="translate(-374 -239) translate(320 100) matrix(-1 0 0 1 128 0)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
