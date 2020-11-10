import React, { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

function SingleAccordianItem({ data }) {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const { title, info } = data;

  return (
    <div>
      <div className="accordianParent">
        <div className="accFlex">
          <h4>{title}</h4>

          {isOpen ? (
            <AiOutlineMinusCircle onClick={handleClick} className="plusIcon" />
          ) : (
            <AiOutlinePlusCircle onClick={handleClick} className="plusIcon" />
          )}
        </div>
        <div className="accInfo">{isOpen && info}</div>
      </div>
    </div>
  );
}

export default SingleAccordianItem;
