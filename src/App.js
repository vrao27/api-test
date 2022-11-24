import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/MyRecipes").then(({ data }) => {
      console.log(" ", data);
      setData(data);
    });
  }, []);

  if (!data) return "Loading...";
  return (
    <>
      {" "}
      <div className="App">{data.rows[1].description}</div>
    </>
    // this is forf contentful<div className="App">{data?.entries[0].fields?.description["en-US"]}</div>
  );
}

export default App;
