import * as React from 'react';

import { Button } from '../Button';
import { ToggleButtonContext } from './toggleButtonContext';

type Props<T> = {
  value: T | undefined;
  'aria-label': string;
  children?: React.ReactNode;
};

export function ToggleButton<T>({ value, children, 'aria-label': ariaLabel }: Props<T>): React.ReactElement<Props<T>> {
  const { value: currentValue, setValue } = React.useContext(ToggleButtonContext);

  function handleButtonClick() {
    setValue(value);
  }

  return (
    <Button
      aria-label={ariaLabel}
      className="flex-1 py-4"
      variant={value === currentValue ? 'primary' : 'light'}
      onClick={handleButtonClick}
    >
      {children ?? `${value}`}
    </Button>
  );
}
