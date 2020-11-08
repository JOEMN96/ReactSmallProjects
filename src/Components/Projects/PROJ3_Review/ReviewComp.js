import React, { useState } from "react";
import data from "../../../Data/proj3data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function ReviewComp() {
  let [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNum = (num) => {
    if (num > data.length - 1) {
      return 0;
    }

    if (num < 0) {
      return data.length - 1;
    }

    return num;
  };

  const nextClick = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const prevClick = () => {
    let newIndex = index - 1;
    let a = checkNum(newIndex);
    setIndex(a);
  };

  const randomNum = () => {
    var item = Math.floor(Math.random() * data.length);

    if (item === index) {
      return item + 1;
    }
    setIndex(checkNum(item));
  };

  return (
    <article className="imageArticle">
      <img src={image} alt={name} />
      <span>
        <FaQuoteRight className="quoteIcon" />
      </span>
      <div className="reviewDetail">
        <h5> {name} </h5>
        <h6> {job} </h6>
        <p> {text} </p>
      </div>
      <div className="reviewNav">
        <button onClick={prevClick} className="btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextClick} className="btn">
          <FaChevronRight />
        </button>
        <div className="randombtn">
          <button onClick={randomNum} className="btn mybtn mt-4">
            Random
          </button>
        </div>
      </div>
    </article>
  );
}

export default ReviewComp;
