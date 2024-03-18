import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <nav>
    <img src="/logo.png" class="logo" />
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    </main>
  );
};

export default Home;
