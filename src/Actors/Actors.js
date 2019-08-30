import React from "react";
import "./Actors.css";
import { thisExpression } from "@babel/types";

function Actors({ actors }) {
  return (
    <div className="actors">
      <ul className="movie-actors">
        {actors &&
          actors.map((actor, index) => {
            return (
              <li key={index} className="actor-details">
                {actor.image ? (
                  <img className="actor-image" src={actor.image} alt="/" />
                ) : (
                  <img
                    className="no-actor-image"
                    src="https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png"
                    alt=""
                  />
                )}

                <div className="names">
                  <div className="actor-name">{actor.name}</div>
                  <div className="actor-role">{actor.role}</div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Actors;
