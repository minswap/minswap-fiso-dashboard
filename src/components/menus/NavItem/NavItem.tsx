import * as React from 'react';
import classnames from 'classnames';

import { Styleable } from 'src/components/types/styleable';

export interface NavItemIconProps {
  className: string;
}

export interface NavItemProps extends Styleable {
  icon: (props: NavItemIconProps) => React.ReactNode;
  text: string;
  href?: string;
  isActive?: boolean;
  size?: 'sm' | 'md';
  target?: string;
  rel?: string;
}

export const NavItem = React.forwardRef<HTMLDivElement & HTMLAnchorElement, NavItemProps>(function NavItem(
  { icon, text, href, isActive, size = 'md', target, rel, className, style }: NavItemProps,
  ref,
): React.ReactElement<NavItemProps> {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      className={classnames(
        'flex items-center rounded-xl font-semibold hover:bg-greyser hover:bg-opacity-50 focus:bg-greyser focus:bg-opacity-50 focus:outline-none transition duration-200 ease-in-out',
        'dark:hover:text-white dark:focus:text-white dark:opacity-50 dark:hover:opacity-100',
        {
          sm: 'gap-x-4 py-2 pl-2 text-base mx-3',
          md: 'gap-x-6 py-4 pl-3 text-lg mx-4',
        }[size],
        isActive ? 'text-primary dark:text-white dark:opacity-100' : 'dark:opacity-50',
        className,
      )}
      href={href}
      ref={ref}
      rel={rel}
      style={style}
      target={target}
    >
      {icon({
        className: {
          sm: 'w-4 h-4',
          md: 'w-7 h-7',
        }[size],
      })}

      <span className="font-medium">{text}</span>
    </Tag>
  );
});
