import React from "react";
import StarwarsChars from "./StarwarsChars";
import "./StarWars.css";

export default function StarwarsCharsList({ starwarsChars }) {
  return (
    <div className="characters">
      {starwarsChars.map(char => {
        return <StarwarsChars key={char.name} character={char} />;
      })}
    </div>
  );
}
