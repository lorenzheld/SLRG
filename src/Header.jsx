import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img className="img" alt="SLRG logo" src="/images/logo.svg"/>
            </Link>
          </li>
          <div className="flex">
            <li>
              <NavLink activeStyle={activeStyle} to="/baderegeln">
                Baderegeln
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/rettungsgeräte">
                Rettungsgeräte
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/rettungsgriffe">
                Rettungsgriffe
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
