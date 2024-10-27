import React from "react";
import { Route, Routes } from "react-router-dom";
import Web from "./Web";
import Video from "./Video";
import News from "./News";
import Image from "./Image";

const Results = () => {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/web" element={<Web />} />
      <Route path="/video" element={<Video />} />
      <Route path="/image" element={<Image />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default Results;
