import React from "react";

import { useGlobalValues } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  //
  const { loading, list } = useGlobalValues();

  const renderList = () => {
    return list.map((item) => {
      return (
        <div key={item.idDrink} className="col-sm-6 col-md-4 col-lg-3">
          <Cocktail {...item} />
        </div>
      );
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (list.length === 0) {
    return (
      <div className="container text-center">
        <h3 className="text-danger text-capitalize">
          no cocktails matched your search criteria
        </h3>
      </div>
    );
  }

  return (
    <div className="container px-5 text-center">
      <h3 className="text-success">Cocktails List</h3>
      <small>Search more than Hundreds of DRINKS !</small>
      <hr />
      <div className="row">{renderList()}</div>
    </div>
  );
};

export default CocktailsList;
