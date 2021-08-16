import * as React from 'react';
import classnames from 'classnames';

import { BaseButton } from '../BaseButton';
import { OverridableComponentProps } from '../types/overrideableComponent';

type BaseProps = {
  color?: 'default' | 'primary';
  variant?: 'default' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  isReadonly?: boolean;
};

type Props<C extends React.ElementType> = OverridableComponentProps<C, BaseProps>;

export const IconButton = React.forwardRef<HTMLButtonElement, Props<'button'>>(function IconButton(
  {
    children,
    className,
    color = 'default',
    size = 'sm',
    isReadonly = false,
    variant = 'default',
    component,
    ...rest
  }: Props<'button'>,
  ref,
) {
  return (
    <BaseButton
      className={classnames(
        isReadonly ? 'hover:cursor-default' : 'hover:opacity-80',
        {
          default: 'text-current',
          primary: 'text-primary',
        }[color],
        {
          sm: 'w-7 h-7',
          md: 'w-9 h-9',
          lg: 'w-10 h-10',
        }[size],
        variant === 'gray' ? 'bg-solitude rounded-2xl p-1' : undefined,
        className,
      )}
      component={component}
      ref={ref}
      tabIndex={isReadonly ? -1 : undefined}
      {...rest}
    >
      {children}
    </BaseButton>
  );
}) as <C extends React.ElementType>(props: Props<C>) => React.ReactElement;
