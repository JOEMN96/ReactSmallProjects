import React from "react";

function List({ people }) {
  let vals = people.map((val) => {
    let { id, name, age, image } = val;
    return (
      <div key={id} className="pepopleCard">
        <img className="bdayPplImg" src={image} alt={name} />
        <div className="bdayCardDetail">
          <h6> {name} </h6>
          <p> {age} Years </p>
        </div>
      </div>
    );
  });

  return <>{vals}</>;
}

export default List;
