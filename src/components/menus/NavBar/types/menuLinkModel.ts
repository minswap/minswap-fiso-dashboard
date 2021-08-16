import { NavItemIconProps } from '../../NavItem';

export interface MenuLinkModel {
  text: string;
  href: string;
  icon: (props: NavItemIconProps) => React.ReactElement<NavItemIconProps>;
}
