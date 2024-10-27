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
      headers: {
        "x-rapidapi-key": "894b27832emsh20496688d5036b1p159465jsn2b9aa9d592ce",
        // "x-rapidapi-host": baseURL.replace(/^https:\/\/|\/.*$/g, ""),
        "x-rapidapi-host": host,
      },
    }); //Step 1: Fetch data and store result in variable
    const results = await res.json(); //Step 2: Covert fetched result to json
    console.log(results);
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
