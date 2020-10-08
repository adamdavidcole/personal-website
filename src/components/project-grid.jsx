import React from "react";
import { times, find, filter } from "lodash";
import classNames from "classnames";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";

import ProjectGridCard from "./project-grid-card";

// breakpoint rules for masonry grid
const BREAKPOINT_COLUMNS_OBJ = {
  default: 4,
  1100: 3,
  700: 2,
  //   500: 1,
};

export default function ProjectGrid({ projects }) {
  const { projectsFilter } = useParams();

  // set of projects to render based on the users chosen filter
  const projectsToRender = projectsFilter
    ? filter(projects, (project) => project.category === projectsFilter)
    : projects;

  // subroute to use for project cards
  const subroute = projectsFilter || "projects";

  return (
    <div className="p-project-grid__container">
      <Masonry
        breakpointCols={BREAKPOINT_COLUMNS_OBJ}
        className="p-project-grid"
        columnClassName="p-project-grid__column"
      >
        {projectsToRender.map((project) => (
          <ProjectGridCard
            project={project}
            route={`/${subroute}/${project.id}`}
          />
        ))}
      </Masonry>
    </div>
  );
}
