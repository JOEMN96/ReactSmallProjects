import React, { useEffect, useState } from "react";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(",");
  const hexval = `#${hexColor}`;
  const handleClick = () => {
    setalert(true);
    navigator.clipboard.writeText(hexval);
    console.log("clicke");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <div
      className={`col-md-2 palleteItem ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p>{weight}%</p>
      <p className="hexCode" onClick={handleClick}>
        {hexval}
      </p>
      {alert && <p>Copied to ClibBoard</p>}
    </div>
  );
}

export default SingleColor;
