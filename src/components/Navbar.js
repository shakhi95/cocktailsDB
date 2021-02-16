import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //

  return (
    <nav className="text-white bg-success shadow mb-5">
      <div className="container px-3">
        <div className="d-flex align-items-center py-2">
          <Link
            className="text-decoration-none text-warning fw-bolder fs-4"
            to="/"
          >
            CocktailsDB
          </Link>
          <div className="d-flex ms-auto">
            <Link
              className="text-decoration-none text-white mx-2 d-none d-sm-block"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none text-white mx-2"
              to="/contact"
            >
              Contact
            </Link>
            <Link className="text-decoration-none text-white mx-2" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
