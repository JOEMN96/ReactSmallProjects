import React, { useState } from "react";

function ColorGEn() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ye");
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5">Lorem Ipsum Generator</h3>
      <div className="innerLorem text-center mt-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            name="color"
            id="amunt"
            value={color}
            placeholder="#7579e7"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="mybtn" type="submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default ColorGEn;
