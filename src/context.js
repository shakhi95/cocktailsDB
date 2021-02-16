import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const [selectedID, setSelectedID] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    setList(data.drinks);
    setLoading(false);
  };

  const fetchSearched = async () => {
    setLoading(true);
    const {
      data,
    } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?",
      { params: { s: searchTerm } }
    );

    if (data.drinks) {
      setList(data.drinks);
    } else {
      setList([]);
    }

    setLoading(false);
  };

  const fetchOne = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedID}`
    );
    setSelectedDetails(data.drinks[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    const timeid = setTimeout(() => {
      if (searchTerm.length === 0) {
        fetchAll();
      } else {
        fetchSearched();
      }
    }, 700);

    return () => {
      clearTimeout(timeid);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (selectedID) {
      fetchOne();
    }
  }, [selectedID]);

  return (
    <AppContext.Provider
      value={{
        loading,
        list,
        searchTerm,
        setSearchTerm,
        selectedID,
        setSelectedID,
        selectedDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalValues = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalValues };
