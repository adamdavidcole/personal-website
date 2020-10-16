import React from "react";
import { find } from "lodash";
import { useParams } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

import { getSelectedProjectById } from "../utility";

import ProjectGrid from "./project-grid";
import ProjectContainer from "./project/project-container";
import projects from "../data/projects.json";

export default function Home() {
  const { projectId, projectsFilter } = useParams();

  const selectedProject = getSelectedProjectById({ projectId });

  return (
    <div className="p-home">
      <ProjectContainer project={selectedProject} />
      <ProjectGrid projects={projects} />
    </div>
  );
}
