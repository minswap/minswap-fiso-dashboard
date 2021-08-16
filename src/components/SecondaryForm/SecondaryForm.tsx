import * as React from 'react';
import classnames from 'classnames';

import { Paper } from '../Paper';
import { ExtendableComponentProps } from '../types/overrideableComponent';

type Props = ExtendableComponentProps<'div'>;

export function SecondaryForm({ children, className, ...rest }: Props): React.ReactElement<Props> {
  return (
    <Paper
      className={classnames('max-w-lg w-full px-5 py-6 flex flex-col bg-white dark:bg-blackRussian', className)}
      {...rest}
    >
      {children}
    </Paper>
  );
}
