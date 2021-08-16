import * as React from 'react';

import { IconProps } from './props';

export function MediumIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg height="17" viewBox="0 0 20 17" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".6">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M6.663 16.324c0 .583-.434.824-.915.583l-5.19-2.612c-.156-.075-.288-.2-.396-.375-.107-.176-.162-.35-.162-.522V.618c0-.476.284-.692.927-.37l5.703 2.87c.083.084.022-.487.033 13.206zm.715-12.018l5.96 9.709-5.96-2.982V4.306zM20 4.508v11.816c0 .187-.052.338-.157.454-.104.116-.245.174-.424.174-.178 0-.353-.049-.524-.146l-4.922-2.467L20 4.51zm-.033-1.345c0 .023-.954 1.59-2.863 4.702-1.908 3.112-3.026 4.935-3.354 5.466L9.398 6.223 13.013.316c.197-.326.6-.383.871-.247l6.038 3.027c.03.014.045.037.045.067z"
                transform="translate(-44 -516) translate(44 514) translate(0 2)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
