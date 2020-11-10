import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col mt-5 text-center">
          <h1>Error ! </h1>
          <Link to="/">
            <button className="mybtn ">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
