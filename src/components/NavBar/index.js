import React, { useState } from "react";

import { useWindowDimensions } from "../../Hooks";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);
  const { width } = useWindowDimensions();

  return width > 1000 ? (
    <NavBarDesktop>{children}</NavBarDesktop>
  ) : (
    <NavBarMobile>{children}</NavBarMobile>
  );
};

export default NavBar;
