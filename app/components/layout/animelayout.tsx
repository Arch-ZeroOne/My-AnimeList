"use client";
import ThemeController from "../themecontroller/ThemeController";
const AnimeLayout = () => {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-20 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <button className="btn btn-ghost text-xl">AnimeList</button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button>Home</button>
            </li>

            <li>
              <button>Categories</button>
            </li>
            <li>
              <button>Favourites</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <button>Item 1</button>
          </li>
          <li>
            <button>Parent</button>
            <ul>
              <li>
                <button>Submenu 1</button>
              </li>
              <li>
                <button>Submenu 2</button>
              </li>
            </ul>
          </li>
          <li>
            <button>Item 3</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnimeLayout;
