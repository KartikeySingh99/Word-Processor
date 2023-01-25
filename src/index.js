import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </>
);
