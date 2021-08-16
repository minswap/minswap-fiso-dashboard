import * as React from 'react';
import classnames from 'classnames';

import { BaseButton } from '../BaseButton';
import { Spinner } from '../Spinner';
import { OverridableComponentProps } from '../types/overrideableComponent';

type BaseProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'light' | 'secondary' | 'outline-primary' | 'outline-secondary';
  isFullWidth?: boolean;
  isLoading?: boolean;
};

type Props<C extends React.ElementType> = OverridableComponentProps<C, BaseProps>;

export const Button = React.forwardRef<HTMLButtonElement, Props<'button'>>(function Button(
  {
    children,
    isFullWidth = false,
    size = 'md',
    variant = 'primary',
    className,
    isLoading = false,
    disabled = false,
    onClick,
    component,
    ...rest
  }: Props<'button'>,
  ref,
) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (isLoading) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <BaseButton
      className={classnames(
        'disabled:bg-opacity-100 disabled:bg-solitude disabled:cursor-not-allowed disabled:text-gray-600 hover:bg-opacity-70 active:bg-opacity-90',
        isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-opacity-90',
        {
          primary: 'bg-primary text-white',
          secondary:
            'bg-secondary text-white dark:bg-blackRussian dark:border dark:border-white dark:border-opacity-10',
          light: 'bg-solitude dark:bg-midnight dark:bg-opacity-50',
          'outline-secondary':
            'bg-white border-secondary text-secondary border dark:border-opacity-20 dark:border-white dark:text-white dark:bg-blackRussian',
          'outline-primary': 'text-primary border border-primary',
        }[variant],
        {
          sm: 'px-4 py-3 text-sm font-medium rounded-xl min-w-[4rem] h-10',
          md: 'px-7 text-base font-semibold rounded-2xl min-w-[6rem] h-12',
          lg: 'px-10 text-[18px] font-bold rounded-3xl h-14 min-w-[8rem]',
        }[size],
        isFullWidth ? 'w-full' : null,
        className,
      )}
      component={component}
      disabled={disabled}
      ref={ref}
      onClick={handleClick}
      {...rest}
    >
      {isLoading ? (
        <>
          <Spinner className={classnames('mr-3', { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-6 h-6' }[size])} />
          {children}
          <span>...</span>
        </>
      ) : (
        children
      )}
    </BaseButton>
  );
}) as <C extends React.ElementType>(props: Props<C>) => React.ReactElement;
