import React, { useEffect } from "react";
import Loading from "./Loading";

function Tours() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [readMore, setReadMore] = React.useState(false);

  // API Link
  const url = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filteration

  const filterArr = (id) => {
    const newData = data.filter((individual) => {
      console.log(individual.id);
      return individual.id !== id;
    });
    setData(newData);
  };

  if (loading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center ">
            <h1 className="text-center mt-5"> No Plans Left</h1>
            <button onClick={() => fetchData()} className="mybtn">
              Refersh
            </button>
          </div>
        </div>
      </div>
    );
  }

  let template = data.map(({ id, image, info, name }) => {
    return (
      <div key={id} className="tourCard">
        <div className="card mb-3">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {readMore ? info : `${info.substring(0, 200)}...`}
              <span
                className="readMore"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "Show Less" : "Read More"}
              </span>
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <button
            onClick={() => {
              filterArr(id);
            }}
            className="btn  mybtn"
          >
            Not Intrested
          </button>
        </div>
      </div>
    );
  });

  return <div>{template}</div>;
}

export default Tours;
