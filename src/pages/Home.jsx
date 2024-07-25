import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Purpose from "../components/Purpose";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <>
        <Header />
        <About />
        <Purpose />
        <Dashboard />
    </>
  );
};

export default Home;
