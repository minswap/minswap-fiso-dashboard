import * as React from 'react';

export function usePreventBodyScroll(): void {
  React.useLayoutEffect(() => {
    const hasScrollBar = document.body.scrollHeight > window.innerHeight;
    if (!hasScrollBar) {
      return;
    }

    document.body.style.overflowY = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflowY = '';
      document.body.style.touchAction = '';
    };
  }, []);
}
