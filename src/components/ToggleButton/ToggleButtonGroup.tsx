import * as React from 'react';

import { ToggleButtonContext, ToggleButtonContextValue } from './toggleButtonContext';

type Props<T> = {
  value: T | undefined;
  onChange: (value: T) => void;
  children: React.ReactNode;
  'aria-label'?: string;
};

export function ToggleButtonGroup<T>({
  'aria-label': ariaLabel,
  children,
  value,
  onChange,
}: Props<T>): React.ReactElement<Props<T>> {
  const onChangeRef = React.useRef<(value: T) => void>(onChange);

  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const handleChange = React.useCallback((value: T): void => {
    onChangeRef.current(value);
  }, []);

  const contextInitialValue: ToggleButtonContextValue = React.useMemo(
    () => ({
      value,
      setValue: handleChange,
    }),
    [handleChange, value],
  );

  return (
    <ToggleButtonContext.Provider value={contextInitialValue}>
      <div aria-label={ariaLabel} className="flex flex-row items-center justify-between gap-x-4" role="group">
        {children}
      </div>
    </ToggleButtonContext.Provider>
  );
}
