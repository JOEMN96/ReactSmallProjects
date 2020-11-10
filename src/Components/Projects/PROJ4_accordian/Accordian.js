import React from "react";
import SingleAccordianItem from "./SingleAccordianItem";
import data from "../../../Data/proj4data";

function Accordian() {
  return (
    <div className="accordianConatainer">
      {data.map((item) => {
        return <SingleAccordianItem key={item.id} data={item} />;
      })}
    </div>
  );
}

export default Accordian;
