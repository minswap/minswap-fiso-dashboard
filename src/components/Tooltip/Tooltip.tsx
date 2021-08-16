import * as React from 'react';
import { usePopper } from 'react-popper';

import { TooltipContext, TooltipContextValue } from './contexts/tooltipContext';
import * as TooltipReducer from './reducers/tooltipReducer';

type Props = {
  readonly children: React.ReactNode;
};

export function Tooltip({ children }: Props): React.ReactElement<Props> {
  const [state, dispatch] = React.useReducer(TooltipReducer.reducer, TooltipReducer.initialState);
  const { styles, attributes } = usePopper(state.referenceElement, state.contentElement, {
    modifiers: [
      { name: 'arrow', options: { element: state.arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          mainAxis: true,
          padding: {
            right: 20,
            left: 20,
          },
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top'],
        },
      },
    ],
    strategy: 'fixed',
    placement: 'bottom',
  });

  const show = React.useCallback(() => {
    TooltipReducer.show(dispatch);
  }, []);

  const hide = React.useCallback(() => {
    TooltipReducer.hide(dispatch);
  }, []);

  const setReferenceElement = React.useCallback((element: HTMLElement | null) => {
    TooltipReducer.setReferenceElement(dispatch, element);
  }, []);

  const setArrowElement = React.useCallback((element: HTMLElement | null) => {
    TooltipReducer.setArrowElement(dispatch, element);
  }, []);

  const setContentElement = React.useCallback((element: HTMLElement | null) => {
    TooltipReducer.setContentElement(dispatch, element);
  }, []);

  const contextValue = React.useMemo<TooltipContextValue>(
    () => ({
      setTooltipButton: setReferenceElement,
      isShown: state.isShown,
      show,
      hide,
      setContentElement,
      setArrowElement,
      styles: styles as TooltipContextValue['styles'],
      attributes: attributes as TooltipContextValue['attributes'],
    }),
    [setReferenceElement, state.isShown, show, hide, setContentElement, setArrowElement, styles, attributes],
  );

  return <TooltipContext.Provider value={contextValue}>{children}</TooltipContext.Provider>;
}
