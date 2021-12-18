import * as React from 'react';
import { m } from 'framer-motion';

import { MoreIcon } from 'src/components/icons';
import { Overlay } from 'src/components/Overlay';
import { usePreventBodyScroll } from 'src/hooks';

import { menuLinks } from '../data/menuLinks';
import { subMenuLinks } from '../data/subMenuLinks';
import { NavItem } from '../NavItem';
import { NavLink } from '../NavLink';

export interface SideBarContentProps {
  onOverlayClick: () => void;
}

const MotionOverlay = m(Overlay);

export function SideBarContent({ onOverlayClick }: SideBarContentProps): React.ReactElement<SideBarContentProps> {
  usePreventBodyScroll();

  function handleOverlayClick() {
    onOverlayClick();
  }

  return (
    <>
      <m.div
        animate={{ width: '16rem', color: 'unset' }}
        className="flex overflow-y-auto fixed top-0 bottom-0 left-0 z-30 flex-col pt-16 h-full bg-white dark:bg-blackRussian"
        exit={{ width: 0, color: 'transparent' }}
        initial={{ width: 0, color: 'transparent' }}
        key="sidebar"
      >
        <ul className="list-none">
          {menuLinks.map((link) => (
            <NavLink href={link.href} icon={link.icon} key={link.text} text={link.text} />
          ))}
        </ul>

        <div className="pb-2 bg-solitude dark:bg-sealBrown">
          <NavItem icon={({ className }) => <MoreIcon className={className} />} text="More" />
          <div className="flex flex-col pl-4">
            {subMenuLinks.map((link) => (
              <NavItem
                className="gap-x-8"
                href={link.href}
                icon={link.icon}
                key={link.text}
                rel="noopener noreferer"
                size="sm"
                target="_blank"
                text={link.text}
              />
            ))}
          </div>
        </div>
      </m.div>

      <MotionOverlay
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-20 bg-opacity-70 dark:bg-white dark:bg-opacity-10 bg-primary backdrop-filter backdrop-blur"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        key="overlay"
        onClick={handleOverlayClick}
      />
    </>
  );
}
