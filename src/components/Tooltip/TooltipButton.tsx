import * as React from 'react';

import { OverridableComponentProps } from '../types/overrideableComponent';
import { TooltipContext } from './contexts/tooltipContext';

type Props<C extends React.ElementType> = OverridableComponentProps<C>;

export function TooltipButton<C extends React.ElementType>({
  component,
  children,
  onMouseOver,
  onMouseOut,
  ...rest
}: Props<C>): React.ReactElement<Props<C>> {
  const { setTooltipButton, show, hide } = React.useContext(TooltipContext);
  const Component = component ?? 'button';

  function handleMouseOver(event: React.MouseEvent) {
    if (onMouseOver) {
      onMouseOver(event);
    }

    show();
  }

  function handleMouseOut(event: React.MouseEvent) {
    if (onMouseOut) {
      onMouseOut(event);
    }

    hide();
  }

  return (
    <Component ref={setTooltipButton} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} {...rest}>
      {children}
    </Component>
  );
}
