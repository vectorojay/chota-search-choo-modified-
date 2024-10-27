import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchResults = async (url, host) => {
    setIsLoading(true);

    const res = await fetch(url, {
      method: "GET",
      headers: { host },
    }); //Step 1: Fetch data and store result in variable
    const results = await res.json(); //Step 2: Covert fetched result to json
    setResults(results); //Step 3: Set state to the reults to update data
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, searchTerm, setSearchTerm, fetchResults }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

export default ResultContextProvider;
