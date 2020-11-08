import React from "react";
import ProjImg1 from "../assets/proj1.PNG";
import ProjImg2 from "../assets/proj2.PNG";
import ProjImg3 from "../assets/proj3.PNG";
import DashboardCard from "./DashboardCard";

function Dashboard() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg1}
            heading="BirthDay Remainder"
            des="Simple birthday card Project React state Hook is used to store Data !"
            to="/proj1"
          />
        </div>
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg2}
            heading="Tours Project"
            des="Tours Project UseEffect is Used and Data is fetched from An API"
            to="/proj2"
          />
        </div>
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg3}
            heading="Reviews Project"
            des="Review Project worked on array manupulation ! "
            to="/proj3"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
