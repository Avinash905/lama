import React from "react";
import { Outlet } from "react-router-dom";
import { BackToHome, HomeHeader } from "../components";

const RootLayout = () => {
  return (
    <>
      <HomeHeader />
      <section
        className="flex flex-col justify-center
      items-center gap-6 max-w-6xl mx-auto mt-4"
      >
        <BackToHome />
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;
