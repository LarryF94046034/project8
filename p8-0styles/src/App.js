import React from "react";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//compo
import Layout from "./Layout";

//3pages
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";

//css
import "./styles/style.css";

import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
