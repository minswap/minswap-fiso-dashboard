import * as React from 'react';

import { IconProps } from './props';

export function ArrowRightIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg
      height={props.height || 20}
      viewBox="0 0 34 20"
      width={props.width || 34}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M28.123 8.308l-3.878-4.006c-.39-.403-1.024-.403-1.414 0-.39.404-.39 1.058 0 1.46l3.555 3.675H6c-.552 0-1 .462-1 1.033 0 .57.448 1.032 1 1.032h20.447l-3.616 3.734c-.188.194-.294.457-.294.73 0 .275.106.538.294.732.39.403 1.023.403 1.414 0l3.88-4.007c1.167-1.212 1.167-3.171-.002-4.383z"
              fill={props.color || '#2F45C5'}
              fillRule="nonzero"
              transform="translate(-703.000000, -212.000000) translate(703.000000, 212.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
