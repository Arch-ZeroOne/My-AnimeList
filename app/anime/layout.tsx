import React from "react";
import AnimeLayout from "../components/layout/animelayout";
import SearchBar from "../components/SearchBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <AnimeLayout />
      <SearchBar />
      {children}
    </div>
  );
};

export default Layout;
