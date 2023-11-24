import React from "react";
import { Logo, HomeMenu } from "../../components";

const HomeHeader = () => {
  return (
    <header className="p-4 flex justify-between">
      <Logo />
      <HomeMenu />
    </header>
  );
};

export default HomeHeader;
