import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <h3>
        oops!
        <br />
        <br />
        There is no such page...
      </h3>
      <Link to="/" className="btn btn-outline-success mt-5">
        See Home Page
      </Link>
    </div>
  );
};

export default Error;
