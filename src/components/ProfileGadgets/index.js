import React from "react";

import Biography from "./Biography";
import LongCard from "./LongCard";

const ProfileGadgets = ({ type, options = {} }) => {
  switch (type) {
    case "Biography":
      return <Biography options={options} />;
    case "Work At":
      return <LongCard options={options} />;
    default:
      return;
  }
};

// Work At
// Study At
// Prefered Anime
// Prefered Game
// Prefered Programming Language
// Personal Website
// Email
// Skills
// Badges (Maybe)
// My Anime List

export default ProfileGadgets;
