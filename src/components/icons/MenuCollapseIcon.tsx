import * as React from 'react';

import { IconProps } from './props';

export function MenuCollapseIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g
              fill="currentColor"
              fillRule="nonzero"
              opacity=".6"
              transform="translate(-20 -15) translate(20 15) matrix(-1 0 0 1 27 7)"
            >
              <rect height="2" rx="1" width="18" y="7" />
              <rect height="2" rx="1" width="14" />
              <rect height="2" rx="1" width="14" y="14" />
            </g>
            <g fill="currentColor" fillRule="nonzero" opacity=".598" stroke="#0F1743" strokeWidth=".8">
              <path
                d="M.522 12c-.209 0-.397-.122-.476-.309-.08-.186-.036-.401.111-.544L4.37 7.063c.604-.585.604-1.534 0-2.12L.157.86C.023.734-.03.548.017.373.064.198.205.062.385.016c.18-.045.372.007.501.137l4.212 4.083c1.006.976 1.006 2.558 0 3.534L.886 11.854C.79 11.947.658 12 .522 12z"
                transform="translate(-20 -15) translate(20 15) rotate(-180 4.426 10.5)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
