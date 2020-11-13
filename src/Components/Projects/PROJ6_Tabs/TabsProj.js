import React, { useState, useEffect } from "react";
import Loading from "../PROJ2_TourSearch/Loading";
const url = "https://course-api.com/react-tabs-project";

function TabsProj() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  let jobsApi = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setIsLoading(false);
    setJobs(data);
  };

  useEffect(() => {
    jobsApi();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="tabmain">
      <section className="tabBtns">
        {jobs.map((job, index) => {
          return (
            <button
              onClick={() => {
                setValue(index);
              }}
              className="mybtn"
              key={index}
            >
              {job.company}
            </button>
          );
        })}
      </section>
      <section className="tabItemSec">
        <h2> {title} </h2>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="jobDecription">
              <p>{duty}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default TabsProj;
