import React from "react";

const Home = () => {
  return (
    <marquee behaviour="alternate" scrollamount="20" className="homeText">
      <img
        className="homeImage rounded-circle"
        src="/Harold.jpg"
        alt="Hello Harold"
      />
      <h1>Welcome to Dropship! Click a category to get started</h1>
    </marquee>
  );
};
export default Home;
