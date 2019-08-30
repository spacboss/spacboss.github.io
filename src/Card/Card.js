import React from "react";
import "./Card.css";
import { API_KEY } from "../constants.js";
import { Link } from "react-router-dom";
import { tsPropertySignature } from "@babel/types";

function Card({ title, genres, description, src, index, to }) {
  return (
    <div className="card">
      <div className="card-div">
        {src ? (
          <img className="card-img" src={src} alt="" />
        ) : (
          <img
            className="no-image"
            src="https://s3-ap-southeast-1.amazonaws.com/silverscreen-photos/1534489151m000001.jpg"
            alt=""
          />
        )}

        <div className="text">
          <ul className="genre">
            {genres.map((genre, index) => (
              <li key={index} className="genre-item">
                {genre}
              </li>
            ))}
          </ul>

          <h1 className="title">{title}</h1>
          <p className="par">{description}</p>
          <div className="button-div">
            <Link to={to} className="button">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
