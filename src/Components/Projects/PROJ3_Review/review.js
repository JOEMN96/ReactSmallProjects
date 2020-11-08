import React from "react";
import ReviewComp from "./ReviewComp";

function Review() {
  return (
    <div className="container reviewParent">
      <h2 className="text-center mt-5"> Our Reviews</h2>
      <div className="row">
        <div className="col-md-12 reviewParent">
          <div className="review mt-2">
            <ReviewComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
