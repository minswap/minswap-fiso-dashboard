import * as React from 'react';

import { noop } from 'src/utils';

type Styles = {
  popper: React.CSSProperties;
  arrow: React.CSSProperties;
};

type Attributes = {
  popper:
    | {
        [key: string]: string;
      }
    | undefined;
};

export type TooltipContextValue = {
  isShown: boolean;
  show: () => void;
  hide: () => void;
  setTooltipButton: (element: HTMLElement | null) => void;
  setContentElement: (element: HTMLElement | null) => void;
  setArrowElement: (element: HTMLElement | null) => void;
  styles: Styles | undefined;
  attributes: Attributes | undefined;
};

export const TooltipContext = React.createContext<TooltipContextValue>({
  setTooltipButton: noop,
  show: noop,
  hide: noop,
  isShown: false,
  setContentElement: noop,
  setArrowElement: noop,
  styles: undefined,
  attributes: undefined,
});
