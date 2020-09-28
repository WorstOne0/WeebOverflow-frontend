import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";

import { useWindowDimensions } from "../../Hooks";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const ALL_USERS = gql`
  query {
    getLoggedUser {
      id
    }
  }
`;

const NavBar = ({ children }) => {
  const { loading, error, data } = useQuery(ALL_USERS);

  const [isLogged, setIsLogged] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!error && !loading) data.getLoggedUser && setIsLogged(true);
  }, [loading, error, data]);

  console.log(data);

  return width > 1100 ? (
    <NavBarDesktop isLogged={isLogged}>{children}</NavBarDesktop>
  ) : (
    <NavBarMobile isLogged={isLogged}>{children}</NavBarMobile>
  );
};

export default NavBar;
