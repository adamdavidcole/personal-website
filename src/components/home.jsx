import React from "react";
import { find } from "lodash";
import { useParams } from "react-router-dom";

import animatedBrandstamp from "../assets/brandstamp-minified.gif";
import ProjectGrid from "./project-grid";
import projects from "../data/projects.json";

export default function Home() {
  const { projectId } = useParams();

  const selectedProject =
    projectId && find(projects, (project) => project.id === projectId);

  return (
    <div className="p-home">
      {selectedProject && (
        <div className="p-home__selected_project">
          <h1>{selectedProject.name}</h1>
        </div>
      )}
      <ProjectGrid projects={projects} />
    </div>
  );
}
