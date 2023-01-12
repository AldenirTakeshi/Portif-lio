import React from "react";
import CardsProjects from "../CardsProjects/CardsProjects";
const Projects = () => {
  return (
    <section style={{ backgroundColor: "black", height: "650px" }}>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px 20px",
        }}
      >
        <CardsProjects style={{ margin: "10px 10px" }} />
        <CardsProjects />
        <CardsProjects />
        <CardsProjects />
      </div>
    </section>
  );
};

export default Projects;
