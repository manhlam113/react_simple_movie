import React from "react";
import { NavLink } from "react-router-dom";
const linkList = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Movies",
    to: "/movies",
  },
];
const Header = () => {
  return (
    <header className="header flex justify-center items-center gap-x-5 p-4 mb-4 text-white text-xl shadow-md">
      {linkList.length > 0 &&
        linkList.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.title}
          </NavLink>
        ))}
    </header>
  );
};

export default Header;
