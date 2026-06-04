import React from "react";
import AnimeLayout from "../components/layout/animelayout";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimeLayout />
      {children}
    </div>
  );
};

export default Layout;
