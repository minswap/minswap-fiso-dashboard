import * as React from 'react';
import classnames from 'classnames';

import { OverridableComponentProps } from '../types/overrideableComponent';

type Props<C extends React.ElementType> = OverridableComponentProps<C>;

export function H1<C extends React.ElementType = 'h1'>({
  component,
  className,
  children,
  ...rest
}: Props<C>): React.ReactElement<Props<C>> {
  const Component = component ?? 'h1';
  return (
    <Component className={classnames('text-lg font-bold', className)} {...rest}>
      {children}
    </Component>
  );
}
