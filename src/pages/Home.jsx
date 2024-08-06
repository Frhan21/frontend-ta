import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Purpose from "../components/Purpose";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Purpose />
      <Dashboard />
      <Footer />
    </>
  );
};

export default Home;
