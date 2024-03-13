'use client';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';

const NavSmallScreen = ({ children }: { children: React.ReactNode }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className="sm:hidden sm:invisible flex h-full">
        <Sidebar width="320px" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="all">
          <Menu onClick={() => setToggled(!toggled)}>{children}</Menu>
        </Sidebar>
        <div className="z-50 w-full -ml-2 p-3 bg-gray-300 fixed top-16">
          <button className="text-xl h-full w-full block " onClick={() => setToggled(!toggled)}>
            <div>&equiv;</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavSmallScreen;
