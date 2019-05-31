import React from "react";
import "./Buttons.css";

export default function Button({ previous, next, getCharacters }) {
  let style = {};
  let nextStyle = {};
  if (previous === null) {
    style = { opacity: "0" };
  }
  if (next === null) {
    nextStyle = { opacity: "0" };
  }
  return (
    <div className="pagination-buttons">
      <button
        style={style}
        onClick={() => {
          getCharacters(previous);
        }}
        className="button"
      >
        Previous
      </button>
      <button
        style={nextStyle}
        onClick={() => {
          getCharacters(next);
        }}
        className="button"
      >
        Next
      </button>
    </div>
  );
}
