import React from "react";
import ProjImg1 from "../assets/proj1.PNG";
import ProjImg2 from "../assets/proj2.PNG";
import ProjImg3 from "../assets/proj3.PNG";
import ProjImg4 from "../assets/Proj4.PNG";
import ProjImg5 from "../assets/Proj5.PNG";
import ProjImg8 from "../assets/Proj8.PNG";
import ProjImg9 from "../assets/Proj9.PNG";
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
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg4}
            heading="Accordion"
            des="Accordian Worked on simple Logics like conditional operator etc !"
            to="/proj4"
          />
        </div>
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg5}
            heading="Filter Menu"
            des="Used Filter() to filter different items and with dynamic menus"
            to="/proj5"
          />
        </div>
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg8}
            heading="Lorem Ipsum GEN"
            des="Used Onchange Event and revamped some ideas"
            to="/proj8"
          />
        </div>
        <div className="col-md-4 mt-5">
          <DashboardCard
            img={ProjImg9}
            heading="HEx Color GEN"
            des="generate color pallete. Learned about UseEffect Hook"
            to="/proj9"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
