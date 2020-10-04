import React from "react";
import {NavLink, useRouteMatch} from 'react-router-dom'

const Navbar = () => {

    const {url} = useRouteMatch()

  return (
    <div className="wow slideInDown">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">
          FAUZI <b>APRIANA</b>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                          <NavLink class="nav-link" to={url}>
                INTRO <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to={url}>
                Link
              </NavLink>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
