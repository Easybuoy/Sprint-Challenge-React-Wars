import React from "react";

export default function StarwarsChars({ character }) {
  console.log(character);
  return (
    <div className="characters-card">
      <p>Name: {character.name}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Birth Year: {character.birth_year}</p>
    </div>
  );
}
