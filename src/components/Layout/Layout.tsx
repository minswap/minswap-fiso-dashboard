import * as React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { MenuCollapseIcon, MenuIcon } from '../icons';
import { NavBar } from '../menus/NavBar';
import { SideBar } from '../menus/SideBar';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function handleMenuButtonClick() {
    setIsMobileMenuOpen((currentlyOpen) => !currentlyOpen);
  }

  function handleSideBarClose() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="flex flex-col w-full min-h-full bg-mainLayout bg-opacity-60">
      <Header
        menuIcon={isMobileMenuOpen ? <MenuCollapseIcon /> : <MenuIcon />}
        onMenuButtonClick={handleMenuButtonClick}
      />

      <main className="flex items-start flex-1 pt-10 pb-10 lg:pt-8 lg:pb-0 lg:px-5">
        <NavBar />

        <SideBar isOpen={isMobileMenuOpen} onClose={handleSideBarClose} />

        {children}
      </main>

      <Footer />
    </div>
  );
}
