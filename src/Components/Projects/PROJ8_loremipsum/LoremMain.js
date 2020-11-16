import React, { useState } from "react";
import data from "../../../Data/Proj8data";
function LoremMain() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = count;
    if (amount > 8) {
      amount = 8;
    } else if (amount < 1) {
      amount = 1;
    }
    setValue(data.slice(0, amount));
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5">Lorem Ipsum Generator</h3>
      <div className="innerLorem text-center mt-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="amountcx">Paragraphs: </label>
          <input
            type="number"
            name="amount"
            id="amunt"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button className="mybtn" type="submit">
            Generate
          </button>
        </form>
        <p className="mt-4 maxP">Max 8 Paragraphs</p>
      </div>

      <div className="generatedParaSec">
        {value.map((item, index) => {
          return <p key={index}> {item} </p>;
        })}
      </div>
    </div>
  );
}

export default LoremMain;
