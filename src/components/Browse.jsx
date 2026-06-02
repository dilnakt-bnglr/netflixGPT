import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
