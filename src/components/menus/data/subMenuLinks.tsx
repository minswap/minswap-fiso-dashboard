import { ContactIcon, DiscordIcon, GithubIcon, MediumIcon, RedditIcon, TwitterIcon } from 'src/components/icons';

import { MenuLinkModel } from '../NavBar/types/menuLinkModel';
import { NavItemIconProps } from '../NavItem';

export const subMenuLinks: MenuLinkModel[] = [
  {
    text: 'Twitter',
    href: 'https://twitter.com/MinswapDEX',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <TwitterIcon className={className} />;
    },
  },
  {
    text: 'Discord',
    href: 'https://t.co/lwv9szY861?amp=1',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <DiscordIcon className={className} />;
    },
  },
  {
    text: 'Github',
    href: 'https://github.com/minswap',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <GithubIcon className={className} />;
    },
  },
  {
    text: 'Medium',
    href: 'https://github.com/minswap',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <MediumIcon className={className} />;
    },
  },
  {
    text: 'Reddit',
    href: 'https://github.com/minswap',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <RedditIcon className={className} />;
    },
  },
  {
    text: 'Contact',
    href: '#',
    icon: function renderItem({ className }: NavItemIconProps): React.ReactElement<NavItemIconProps> {
      return <ContactIcon className={className} />;
    },
  },
];
