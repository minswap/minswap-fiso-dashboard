import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ModalContent({ children, className }: Props): React.ReactElement<Props> {
  return <div className={classnames('w-full mx-auto bg-white shadow-xl rounded-3xl', className)}>{children}</div>;
}
