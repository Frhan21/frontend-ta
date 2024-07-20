import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Purpose from "../components/Purpose";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Purpose/>
      <Footer/>
    </>
  );
};

export default Home;
