import React from "react";
import colorNames from "colornames";

function Input({ colorValue, setColorValue, setHexValue, setIsDarkText, isDarkText }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name: </label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
      <button
        type="button"
        onClick={() => {
          setColorValue("");
          setHexValue("");
        }}
      >
        Reset
      </button>
    </form>
  );
}

export default Input;
