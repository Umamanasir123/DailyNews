import React from "react";
import loadSpin from "../loadSpin.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loadSpin} alt="loading" />
    </div>
  );
};

export default Spinner;
