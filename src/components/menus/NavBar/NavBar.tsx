import * as React from 'react';

import { menuLinks } from '../data/menuLinks';
import { NavLink } from '../NavLink';
import { NavBarSubMenu } from './NavBarSubMenu';

export function NavBar(): React.ReactElement {
  return (
    <nav className="hidden py-7 w-64 text-base bg-white rounded-2xl shadow-md lg:block dark:bg-blackRussian">
      <ul className="list-none">
        {menuLinks.map((link) => (
          <NavLink href={link.href} icon={link.icon} key={link.text} text={link.text} />
        ))}

        <NavBarSubMenu />
      </ul>
    </nav>
  );
}
