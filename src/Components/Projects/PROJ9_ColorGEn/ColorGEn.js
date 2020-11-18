import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
// new Values("#ddd").all(10)
function ColorGEn() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setColorList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center mt-5">Color Pallete Generator</h3>
      <div className="innerLorem text-center mt-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color: </label>
          <input
            className={error ? "loremError" : null}
            type="text"
            name="color"
            id="amunt"
            value={color}
            placeholder="Red"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="mybtn" type="submit">
            Generate
          </button>
        </form>
      </div>
      <div className="row palleteList">
        {colorList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorGEn;
