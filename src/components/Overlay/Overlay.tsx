import * as React from 'react';
import classnames from 'classnames';

import { Styleable } from '../types/styleable';

interface Props extends Styleable {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Overlay = React.forwardRef<HTMLDivElement, Props>(function Overlay(
  { className, style, onClick }: Props,
  ref,
): React.ReactElement<Props> {
  return (
    <div
      className={classnames(
        'fixed inset-0 bg-opacity-40 bg-primary dark:bg-white dark:bg-opacity-5 backdrop-filter backdrop-blur-sm backdrop-opacity-90',
        className,
      )}
      ref={ref}
      style={style}
      onClick={onClick}
    />
  );
});
