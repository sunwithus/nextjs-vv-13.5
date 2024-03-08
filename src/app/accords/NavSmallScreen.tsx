"use client";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";

const NavSmallScreen = ({ children }: { children: React.ReactNode }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="hidden lg:block">{children}</div>
      <div className="lg:hidden flex h-full">
        <Sidebar
          width="320px"
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="all"
        >
          <Menu onClick={() => setToggled(!toggled)} className="h-0">
            {children}
          </Menu>
        </Sidebar>
        <div className="h-full mt-4 -ml-6 p-4 bg-gray-300 block fixed">
          <button
            className="sb-button h-full lg:hidden"
            onClick={() => setToggled(!toggled)}
          >
            {" => "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavSmallScreen;
