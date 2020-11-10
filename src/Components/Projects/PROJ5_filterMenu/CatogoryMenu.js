import React from "react";

function CatogoryMenu({ filter, category }) {
  return (
    <div className="filterBtnContainer">
      {category.map((cat, index) => {
        return (
          <button key={index} className="mybtn" onClick={() => filter(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default CatogoryMenu;
