import * as React from 'react';

import { ExtendableComponentProps } from '../types/overrideableComponent';
import { TooltipContext } from './contexts/tooltipContext';

type Props = ExtendableComponentProps<'div'>;

export function TooltipContent({ children }: Props): React.ReactElement<Props> {
  const { isShown, setContentElement, setArrowElement, styles, attributes } = React.useContext(TooltipContext);
  return (
    <>
      {isShown ? (
        <div
          className="relative z-50 max-w-xs px-5 py-4 text-white tooltip-content filter drop-shadow lg:w-screen lg:max-w-sm bg-sealBrown rounded-2xl"
          ref={setContentElement}
          style={styles?.popper}
          {...(attributes?.popper ?? {})}
        >
          {children}

          <div className="arrow" ref={setArrowElement} style={styles?.arrow} />
        </div>
      ) : null}

      <style jsx>{`
        .tooltip-content[data-popper-placement='bottom'] .arrow {
          top: -0.375rem;
        }

        .tooltip-content[data-popper-placement='right'] .arrow {
          left: -0.375rem;
        }

        .arrow,
        .arrow::before {
          width: 0.75rem;
          height: 0.75rem;
          background-color: inherit;
          position: absolute;
        }

        .arrow {
          visibility: hidden;
        }

        .arrow::before {
          content: '';
          transform: rotate(45deg);
          visibility: visible;
        }
      `}</style>
    </>
  );
}
