import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { NavItem, NavItemProps } from '../NavItem';

interface Props extends Omit<NavItemProps, 'isActive'> {
  href: string;
}

export function NavLink({ href, ...rest }: Props): React.ReactElement<Props> {
  const router = useRouter();

  return (
    <li>
      <Link href={href} passHref>
        <NavItem isActive={router.route === href} {...rest} />
      </Link>
    </li>
  );
}
