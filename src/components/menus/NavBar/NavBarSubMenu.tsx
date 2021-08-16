import * as React from 'react';
import { Menu } from '@headlessui/react';

import { MoreIcon } from 'src/components/icons';

import { subMenuLinks } from '../data/subMenuLinks';
import { NavItem } from '../NavItem';

export function NavBarSubMenu(): React.ReactElement {
  return (
    <Menu as="li">
      <Menu.Button className="w-full focus:outline-none focus:text-primary dark:focus:text-white">
        <NavItem className="relative" icon={({ className }) => <MoreIcon className={className} />} text="More" />

        <Menu.Items className="absolute py-2 bg-white dark:bg-blackRussian shadow-menu rounded-2xl w-36 focus:outline-none">
          <div className="absolute top-0 w-3 h-3 transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-blackRussian left-1/2" />

          <ul className="list-none">
            {subMenuLinks.map((link) => (
              <Menu.Item key={link.text}>
                {({ active }) => (
                  <NavItem
                    href={link.href}
                    icon={link.icon}
                    isActive={active}
                    rel="noopener noreferer"
                    size="sm"
                    target="_blank"
                    text={link.text}
                  />
                )}
              </Menu.Item>
            ))}
          </ul>
        </Menu.Items>
      </Menu.Button>
    </Menu>
  );
}
