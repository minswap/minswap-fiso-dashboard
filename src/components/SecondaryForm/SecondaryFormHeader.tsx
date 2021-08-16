import * as React from 'react';
import classnames from 'classnames';

import { ExtendableComponentProps } from '../types/overrideableComponent';

type Props = ExtendableComponentProps<'div'>;

export function SecondaryFormHeader({ children, className, ...rest }: Props): React.ReactElement<Props> {
  return (
    <div
      className={classnames(
        'flex justify-between items-center pb-5 dark:border-white dark:border-opacity-10 border-b border-gray-200',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
