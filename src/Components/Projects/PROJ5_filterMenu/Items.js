import React from "react";

function Items({ items }) {
  return (
    <div className="row filterItemMain">
      {items.map((item) => {
        const { title, img, price, category, desc } = item;

        return (
          <div key={item.id} className=" col-md-6 ">
            <div className="singleItemFil">
              <div className="filFlexContainer">
                <img src={img} alt={title} />
                <div className="itemdetail">
                  <div className="innerHead">
                    <h5>{title}</h5>
                    <span>{price}</span>
                  </div>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
