import React, { useEffect, useState } from "react";
// import { projects } from "../db";

const ProjectDetails = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
      console.log(data)
  }, []);

  return (
    <div>
      <h1>Data from JSON</h1>
      {/* {data.map((project) => (
        <>
        <p>{project.name}</p>
        </>
      ))} */}
    </div>
  );
};

export default ProjectDetails;
