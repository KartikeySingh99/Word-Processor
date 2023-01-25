import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1>About Our Website</h1>
        <p>
          Word Converter is a project to provide as many online computer
          utilities tools to all users around the world as possible. The use of
          utilities is and will be free of charge.
        </p>
        <p>
          The founder of Word Converter is kartikey Singh. Email:
          kartikxingh456@gmail.com
        </p>
        <p>
          This website started in july 20.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
