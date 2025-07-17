import React,{useEffect} from "react";
import axios from "axios";

//state
import { useState } from "react";

//components
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page,setPage]=useState(1);
  let [currentSearch,setCurrentSearch]=useState("");
  const auth = "GtFKyr0gSQIZxSnr6JZazn5blo5UiQP49hE6xwgS1daE6TaTbPFir4aa";
  const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;

  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture= async(currentSearch)=>{
    let newURL;
    setPage(page+1);
    if(input==="")
    {
      newURL=`https://api.pexels.com/v1/curated?page=${page+1}&per_page=15`;
    }
    else
    {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page+1}`;
    }
    console.log(currentSearch);
    
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  }

  useEffect(()=>{
    search(initialURL);
  },[]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={()=>{morePicture(currentSearch)}}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
