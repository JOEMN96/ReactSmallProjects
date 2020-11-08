import React from "react";
import { Link } from "react-router-dom";

function DashboardCard({ img, heading, des, to }) {
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt={heading} />
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{des}</p>

        <Link className="btn btn-block mybtn" to={to}>
          View
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
