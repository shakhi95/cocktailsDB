import React from "react";
import { Link } from "react-router-dom";

import { useGlobalValues } from "../context";

const Cocktail = (props) => {
  //
  const { setSelectedID } = useGlobalValues();

  const {
    strDrinkThumb: img,
    idDrink: id,
    strAlcoholic: isAlcol,
    strGlass: glass,
    strDrink: name,
  } = props;

  return (
    <div className="card bg-light my-3">
      <img src={img + "/preview"} className="card-img-top" alt={name} />
      <div className="card-body text-start p-3">
        <h5 className="card-title fw-bolder text-success">{name}</h5>
        <small>{glass}</small>
        <br />
        <small className="text-muted">{isAlcol}</small>
        <br />
        <Link
          to={`/cocktail/${id}`}
          className="btn btn-sm btn-outline-success mt-2 d-block mx-auto py-0"
          onClick={() => setSelectedID(id)}
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
