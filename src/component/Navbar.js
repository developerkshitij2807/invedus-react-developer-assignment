import React from "react";

const Navbar = () => {
  return (
    <ul className="flex justify-items-center">
      <li className="mx-6">
        <a className="text-blue-500 hover:text-blue-800" href="/">
          Home
        </a>
      </li>
      <li className="mx-6">
        <a className="text-blue-500 hover:text-blue-800" href="/add-contact">
          Add contacts
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
