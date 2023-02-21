import React from "react";
import { useEffect } from "react";
import axios from "axios";
const HomePage = () => {
  const getData = () => {
    axios
      .get(`http://localhost:3000/crousal`)
      .then((res) => console.log(res.data));
  };
  useEffect(() => {});
  return (
    <div>
      <div id="crousal"></div>
    </div>
  );
};

export default HomePage;
