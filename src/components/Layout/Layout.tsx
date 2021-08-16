import * as React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { NavBar } from '../menus/NavBar';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col w-full min-h-full bg-mainLayout bg-opacity-60">
      <Header />

      <main className="flex items-start flex-1 px-5 pt-12 pb-12 lg:pt-10 lg:pb-0 lg:px-10">
        <NavBar />
        {children}
      </main>

      <Footer />
    </div>
  );
}
