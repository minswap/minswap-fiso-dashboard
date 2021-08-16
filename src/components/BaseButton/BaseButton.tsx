import * as React from 'react';
import classnames from 'classnames';

import { OverridableComponentProps } from '../types/overrideableComponent';

type Props<C extends React.ElementType> = OverridableComponentProps<C>;

export const BaseButton = React.forwardRef<HTMLButtonElement, Props<'button'>>(function BaseButton(
  { className, children, component, ...rest }: Props<'button'>,
  ref,
) {
  const Component = component ?? 'button';
  return (
    <Component
      className={classnames('flex items-center justify-center leading-none whitespace-nowrap select-none', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});
