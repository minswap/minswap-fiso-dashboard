import { DashboardIcon, FAQIcon, MyRewardsIcon } from 'src/components/icons';

import { MenuLinkModel } from '../NavBar/types/menuLinkModel';
import { NavItemIconProps } from '../NavItem';

export const menuLinks: MenuLinkModel[] = [
  {
    text: 'Dashboard',
    href: '/',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <DashboardIcon className={className} />;
    },
  },
  {
    text: 'My Rewards',
    href: '/my-rewards',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <MyRewardsIcon className={className} />;
    },
  },
  {
    text: 'FAQ',
    href: 'https://docs.minswap.org/faq/fiso',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <FAQIcon className={className} />;
    },
  },
];
