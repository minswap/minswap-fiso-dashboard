import * as React from 'react';
import classnames from 'classnames';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  postfix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { postfix, className, ...rest }: Props,
  ref,
): React.ReactElement<Props> {
  return (
    <div
      className={classnames(
        'flex flex-row items-center w-full px-5 border border-solid active:border-primary hover:border-primary border-secondary rounded-[20px]',
        'dark:border-white dark:border-opacity-20 dark:bg-blackRussian',
        className,
      )}
    >
      <input
        className={
          'flex-grow py-[13px] font-sans border-none rounded-3xl focus:text-primary focus:outline-none dark:bg-blackRussian'
        }
        ref={ref}
        {...rest}
      />

      {postfix ? <div className="flex-none ml-2 text-primary">{postfix}</div> : null}
    </div>
  );
});
