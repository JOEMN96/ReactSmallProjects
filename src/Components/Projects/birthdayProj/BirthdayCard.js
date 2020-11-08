import React from "react";
import List from "./List";
import data from "../../../Data/Proj1data";

function BirthdayCard() {
  const [people, setPeople] = React.useState(data);

  return (
    <div className=" birthdayContainer">
      <h1 className="text-center pt-3 pb-3">Birthday Remainder</h1>
      <div className="cardCompo">
        <h5 className="text-center"> {people.length} Birthdays Today</h5>
        <div className="m-2">
          <List people={people} />
        </div>
        <button
          onClick={() => {
            setPeople([]);
          }}
          className="btn btn-block mybtn"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

export default BirthdayCard;
