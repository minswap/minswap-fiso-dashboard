import * as React from 'react';
import classnames from 'classnames';

import { ExtendableComponentProps } from '../types/overrideableComponent';

type Props = ExtendableComponentProps<'div'>;

export function Paper({ className, children, ...rest }: Props): React.ReactElement<Props> {
  return (
    <div className={classnames('rounded-3xl shadow-xl', className)} {...rest}>
      {children}
    </div>
  );
}
