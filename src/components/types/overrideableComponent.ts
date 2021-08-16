/* eslint-disable @typescript-eslint/ban-types */
export type ExtendableComponentProps<C extends React.ElementType, P extends Record<string, unknown> = {}> = Omit<
  React.ComponentPropsWithoutRef<C>,
  keyof P
> &
  P;

export type OverridableComponentProps<
  C extends React.ElementType,
  P extends Record<string, unknown> = {},
> = ExtendableComponentProps<C, P> & { component?: C };
