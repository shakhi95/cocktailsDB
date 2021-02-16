import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGlobalValues } from "../context";
import Loading from "../components/Loading";

const SingleCocktail = (props) => {
  //
  const {
    loading,
    selectedDetails,
    setSelectedID,
    selectedID,
  } = useGlobalValues();

  useEffect(() => {
    if (!selectedID) {
      setSelectedID(props.match.params.id);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!selectedDetails) {
    return <Loading />;
  }

  const {
    strDrinkThumb: img,
    strAlcoholic: isAlcol,
    strGlass: glass,
    strDrink: name,
    strCategory: catg,
    strInstructions: ins,
    strIngredient1: ing1,
    strIngredient2: ing2,
    strIngredient3: ing3,
    strIngredient4: ing4,
    strIngredient5: ing5,
    strIngredient6: ing6,
    strIngredient7: ing7,
    strIngredient8: ing8,
    strIngredient9: ing9,
  } = selectedDetails;

  const ing = [ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9];

  return (
    <div className="container px-5">
      <div className="card bg-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} alt={name} className="w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-uppercase text-success">{name}</h3>
              <small className="bg-success text-white px-2 rounded me-3">
                Alcohol :
              </small>
              <small>{isAlcol}</small>
              <br />
              <small className="bg-success text-white px-2 rounded me-3">
                Glass Type :
              </small>
              <small>{glass}</small>
              <br />
              <small className="bg-success text-white px-2 rounded me-3">
                Category :
              </small>
              <small>{catg}</small>
              <br />
              <small className="bg-success text-white px-2 rounded me-3">
                Ingredients :
              </small>
              <small>
                {ing.map(
                  (item, index) => item && <span key={index}> {item} /</span>
                )}
              </small>
              <br />
              <small className="bg-success text-white px-2 rounded me-3">
                Instructions :
              </small>
              <small>{ins}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link className="btn btn-outline-success mt-5 px-5" to="/">
          Go Home Page
        </Link>
      </div>
    </div>
  );
};

export default SingleCocktail;
