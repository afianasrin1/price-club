import React, { useState } from "react";

import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "./home" },
    { id: 2, name: "Products", path: "./products" },
    { id: 3, name: "Orders", path: "./orders" },
    { id: 4, name: "Contact", path: "./contact" },
    { id: 5, name: "About", path: "./about" },
  ];
  return (
    <nav className="bg-pink-100 w-full">
      {/* {open ? "close icon" : "open icon"} */}

      {/* {open ? (
        <XMarkIcon
          onClick={() => setOpen(!open)}
          className="h-6 w-6 text-blue-500"
        />
      ) : (
        <Bars3Icon
          onClick={() => setOpen(!open)}
          className="h-6 w-6 text-blue-500"
        />
      )} */}
      {/* <Bars3Icon
        onClick={() => setOpen(!open)}
        className="h-6 w-6 text-blue-500"
      /> */}
      {/* <span>{open ? "open" : "close"}</span> */}

      {/* faynali update */}

      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-pink-100 md:flex w-full justify-center  absolute  md:static duration-500 ease-in ${
          open ? "top-6" : "top-[120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
