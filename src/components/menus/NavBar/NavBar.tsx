import * as React from 'react';

import { menuLinks } from '../data/menuLinks';
import { NavLink } from '../NavLink';
import { NavBarSubMenu } from './NavBarSubMenu';

export function NavBar(): React.ReactElement {
  return (
    <nav className="hidden w-64 text-base bg-white shadow-md dark:bg-blackRussian lg:block py-7 rounded-2xl">
      <ul className="list-none">
        {menuLinks.map((link) => (
          <NavLink href={link.href} icon={link.icon} key={link.text} text={link.text} />
        ))}

        <NavBarSubMenu />
      </ul>
    </nav>
  );
}
