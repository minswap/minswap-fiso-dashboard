/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { noop } from 'src/utils';

export type ToggleButtonContextValue = {
  value: any | undefined;
  setValue: (value: any) => void;
};

export const ToggleButtonContext = React.createContext<ToggleButtonContextValue>({
  value: undefined,
  setValue: noop,
});
