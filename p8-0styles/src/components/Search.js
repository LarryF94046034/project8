import React from "react";

import { useState } from "react";
import axios from "axios";

const Search = ({ search }) => {
  return (
    <div className="Search">
      <input className="input" type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
