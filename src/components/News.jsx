import React, { useEffect } from "react";
import { useResultContext } from "./ResultContextProvider";
import Loading from "./Loading";

const apiUrl = "https://web-search24.p.rapidapi.com";
const host = "web-search24.p.rapidapi.com";

const News = () => {
  const { isLoading, searchTerm, setSearchTerm, fetchResults } =
    useResultContext();

  // useEffect(() => {
  //   fetchResults(`${apiUrl}?query=${searchTerm}`, host);
  // }, []);

  if (isLoading) return <Loading />;
  return <div className="text-cyan-500"></div>;
};

export default News;
