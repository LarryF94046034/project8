import React from "react";
import axios from "axios";

const Search = () => {
  const auth = "GtFKyr0gSQIZxSnr6JZazn5blo5UiQP49hE6xwgS1daE6TaTbPFir4aa";
  const initialURL = "https://api.pexels.com/v1/curated?per_page=1&per_page=15";

  const Search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
  };
  return (
    <div className="Search">
      <input className="input" type="text" />
      <button onClick={Search}>Search</button>
    </div>
  );
};

export default Search;
