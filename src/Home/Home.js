import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection.js";
import "./Home.css";
function Home() {
  return (
    <Link to="about">Go To About Page</Link>,
    (
      <div>
        <div className="home-grid">
          <h1 className="home-title">Popular</h1>
          <Collection
            sorting="popularity.desc"
            cardCount={4}
            collectionName="Popular"></Collection>
          <button className="button-home">
            <span>See more </span>
          </button>
        </div>

        <h1 className="home-title">New </h1>
        <Collection
          sorting="release_date.desc"
          cardCount={4}
          collectionName="New"></Collection>
      </div>
    )
  );
}

export default Home;
