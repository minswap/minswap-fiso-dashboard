import * as React from 'react';
import { Menu } from '@headlessui/react';

import { MoreIcon } from 'src/components/icons';

import { subMenuLinks } from '../data/subMenuLinks';
import { NavItem } from '../NavItem';

export function NavBarSubMenu(): React.ReactElement {
  return (
    <Menu as="li">
      <Menu.Button className="w-full focus:outline-none dark:focus:text-white focus:text-primary">
        <NavItem className="relative" icon={({ className }) => <MoreIcon className={className} />} text="More" />

        <Menu.Items className="absolute py-2 w-36 bg-white rounded-2xl focus:outline-none shadow-menu dark:bg-blackRussian">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 -translate-y-1/2 dark:bg-blackRussian" />

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
