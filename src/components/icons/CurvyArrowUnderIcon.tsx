import * as React from 'react';

import { IconProps } from './props';

export function CurvyArrowUnderIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="5" viewBox="0 0 20 5" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="#000" fillRule="nonzero">
          <g>
            <path
              d="M61.334 166c.37 0 .617.25.617.625l.002.179c.06.133.065.282 0 .42l-.002 3.151c0 .375-.247.625-.617.625-.371 0-.618-.25-.618-.625v-2.096c-2.453 1.758-5.503 2.721-8.648 2.721-3.582 0-7.165-1.375-9.883-3.75-.247-.25-.247-.625 0-.875s.618-.25.865 0c2.47 2.25 5.683 3.5 9.018 3.5 2.832 0 5.665-.875 7.989-2.624l-2.43-.001c-.37 0-.617-.25-.617-.625s.247-.625.618-.625h3.706z"
              transform="translate(-362 -266) translate(320 100) matrix(-1 0 0 1 104 0)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
