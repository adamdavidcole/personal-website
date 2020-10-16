import React, { useEffect } from "react";
import { times, find, filter } from "lodash";
import classNames from "classnames";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";

import { getFilteredProjects, getProjectUrl } from "../utility";

import ProjectGridCard from "./project-grid-card";

// breakpoint rules for masonry grid
const BREAKPOINT_COLUMNS_OBJ = {
  default: 4,
  1400: 3,
  700: 2,
  //   500: 1,
};

export default function ProjectGrid({ projects }) {
  const { projectsFilter, projectId } = useParams();

  // set of projects to render based on the users chosen filter
  const projectsToRender = getFilteredProjects({ projectsFilter });

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
            route={getProjectUrl({ projectId: project.id, projectsFilter })}
          />
        ))}
      </Masonry>
    </div>
  );
}
