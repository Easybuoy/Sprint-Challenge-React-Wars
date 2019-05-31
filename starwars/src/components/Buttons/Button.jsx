import React from "react";
import "./Buttons.css";

export default function Button({previous, next, getCharacters}) {
  return (
    <div className="pagination-buttons">
      <button onClick={() => {getCharacters(previous)}} className="button">Previous</button>
      <button onClick={() => {getCharacters(next)}} className="button">Next</button>
    </div>
  );
}
