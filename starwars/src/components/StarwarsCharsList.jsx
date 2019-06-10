import React, { Fragment } from "react";
import StarwarsChars from "./StarwarsChars";
import Buttons from "./Buttons/Button";

import "./StarWars.css";

export default function StarwarsCharsList({ starwarsChars, previous, next, getCharacters }) {
  console.log(starwarsChars);
  return (
    <div className="characters">
      {starwarsChars.map((char, i) => {
        if (starwarsChars.length - 1 === i) {
          return (
            <Fragment key={char.name}>
              <StarwarsChars character={char} />
              <Buttons next={next} previous={previous} getCharacters={getCharacters} />
            </Fragment>
          );
        } else {
          return <StarwarsChars key={char.name} character={char} />;
        }
      })}
    </div>
  );
}
