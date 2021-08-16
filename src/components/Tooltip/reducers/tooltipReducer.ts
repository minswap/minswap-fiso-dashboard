import * as React from 'react';

type State = {
  readonly referenceElement: HTMLElement | null;
  readonly contentElement: HTMLElement | null;
  readonly arrowElement: HTMLElement | null;
  readonly isShown: boolean;
};

type SetReferenceElementAction = {
  readonly type: 'SET_REFERENCE_ELEMENT';
  readonly referenceElement: HTMLElement | null;
};

type SetArrowElementAction = {
  readonly type: 'SET_ARROW_ELEMENT';
  readonly arrowElement: HTMLElement | null;
};

type SetContentElementAction = {
  readonly type: 'SET_CONTENT_ELEMENT';
  readonly contentElement: HTMLElement | null;
};

type ShowTooltipAction = {
  readonly type: 'SHOW_TOOLTIP';
};

type HideTooltipAction = {
  readonly type: 'HIDE_TOOLTIP';
};

type Action =
  | SetReferenceElementAction
  | SetArrowElementAction
  | SetContentElementAction
  | HideTooltipAction
  | ShowTooltipAction;

export function setReferenceElement(dispatch: React.Dispatch<Action>, element: HTMLElement | null): void {
  dispatch({
    type: 'SET_REFERENCE_ELEMENT',
    referenceElement: element,
  });
}

export function setContentElement(dispatch: React.Dispatch<Action>, element: HTMLElement | null): void {
  dispatch({
    type: 'SET_CONTENT_ELEMENT',
    contentElement: element,
  });
}

export function setArrowElement(dispatch: React.Dispatch<Action>, element: HTMLElement | null): void {
  dispatch({
    type: 'SET_ARROW_ELEMENT',
    arrowElement: element,
  });
}

export function show(dispatch: React.Dispatch<Action>): void {
  dispatch({ type: 'SHOW_TOOLTIP' });
}

export function hide(dispatch: React.Dispatch<Action>): void {
  dispatch({ type: 'HIDE_TOOLTIP' });
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_REFERENCE_ELEMENT': {
      return {
        ...state,
        referenceElement: action.referenceElement,
      };
    }
    case 'SET_ARROW_ELEMENT': {
      return {
        ...state,
        arrowElement: action.arrowElement,
      };
    }
    case 'SET_CONTENT_ELEMENT': {
      return {
        ...state,
        contentElement: action.contentElement,
      };
    }
    case 'SHOW_TOOLTIP': {
      return {
        ...state,
        isShown: true,
      };
    }
    case 'HIDE_TOOLTIP': {
      return {
        ...state,
        isShown: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export const initialState: State = {
  arrowElement: null,
  contentElement: null,
  referenceElement: null,
  isShown: false,
};
