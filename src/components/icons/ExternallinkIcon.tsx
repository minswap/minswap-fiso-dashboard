import * as React from 'react';

import { IconProps } from './props';

export function ExternallinkIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="#2F45C5" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M3.69.003c.43 0 .779.348.779.778 0 .43-.349.777-.778.777H1.555v10.887h10.887v-2.222c0-.43.348-.778.777-.778.43 0 .778.348.778.778v3c0 .429-.348.777-.778.777H.778C.348 14 0 13.652 0 13.222V.781C0 .35.348.003.778.003zM13.223 0c.43 0 .778.348.778.778v6.22c0 .43-.348.778-.778.778-.43 0-.777-.348-.777-.778V2.655L4.44 10.659c-.152.152-.35.228-.55.228-.199 0-.398-.076-.55-.228-.303-.304-.303-.796 0-1.1l8.004-8.004H7.001c-.429 0-.777-.348-.777-.777C6.224.348 6.572 0 7 0z"
                transform="translate(-474 -415) translate(320 100) translate(154 315)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
