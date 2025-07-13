import React from "react";
import axios from "axios";

//state
import { useState } from "react";

//components
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  const auth = "GtFKyr0gSQIZxSnr6JZazn5blo5UiQP49hE6xwgS1daE6TaTbPFir4aa";
  const initialURL = "https://api.pexels.com/v1/curated?per_page=1&per_page=15";

  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
