import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";

import { useWindowDimensions } from "../../Hooks";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const ALL_USERS = gql`
  query {
    getLoggedUser {
      id
      role
    }
  }
`;

const NavBar = ({ children }) => {
  const { loading, error, data } = useQuery(ALL_USERS, {
    fetchPolicy: "network-only",
  });

  const [isLogged, setIsLogged] = useState({ logged: false, role: "Guest" });
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!error && !loading)
      data.getLoggedUser &&
        setIsLogged({ logged: true, role: data.getLoggedUser.role });
    data && console.log(data.getLoggedUser);
  }, [loading, error, data]);

  return width > 1100 ? (
    <NavBarDesktop isLogged={isLogged.logged} role={isLogged.role}>
      {children}
    </NavBarDesktop>
  ) : (
    <NavBarMobile isLogged={isLogged.logged} role={isLogged.role}>
      {children}
    </NavBarMobile>
  );
};

export default NavBar;
