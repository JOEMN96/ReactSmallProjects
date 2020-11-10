import React, { useState } from "react";
import data from "../../../Data/Proj5data";
import CatogoryMenu from "./CatogoryMenu";
import Items from "./Items";

const nwCatogories = ["all", ...new Set(data.map((da) => da.category))];

function FilterMenuMAin() {
  const [items, setItems] = useState(data);
  const [catogories, setCatogories] = useState(nwCatogories);
  const filter = (catogory) => {
    if (catogory === "all") {
      setItems(data);
      return;
    }

    const newItems = data.filter((dat) => dat.category === catogory);
    setItems(newItems);
  };

  return (
    <div className="filterMenuMain">
      <h1>Our Menu</h1>
      <CatogoryMenu filter={filter} category={catogories} />
      <Items items={items} />
    </div>
  );
}

export default FilterMenuMAin;
