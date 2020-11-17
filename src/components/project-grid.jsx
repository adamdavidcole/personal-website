import React, { useEffect } from "react";
import { times, find, filter } from "lodash";
import classNames from "classnames";
import Masonry from "react-masonry-css";
import { useParams, useLocation } from "react-router-dom";

import { getFilteredProjects, getProjectUrl } from "../utility";

import ProjectGridCard from "./project-grid-card";

// breakpoint rules for masonry grid
const BREAKPOINT_COLUMNS_OBJ = {
  default: 4,
  1400: 3,
  700: 2,
  //   500: 1,
};

function getGridHeaderTitle({ projectsFilter }) {
  if (!projectsFilter) return "All";

  if (projectsFilter === "code") return "Code";
  if (projectsFilter === "film-animation") return "Film & Animation";
  if (projectsFilter === "art") return "Art";

  return null;
}

export default function ProjectGrid({ projects }) {
  const { projectsFilter, projectId } = useParams();
  const { pathname } = useLocation();

  const isHomepage = pathname === "/";

  const gridHeaderTitle = getGridHeaderTitle({ projectsFilter });
  // set of projects to render based on the users chosen filter
  let projectsToRender = getFilteredProjects({ projectsFilter });

  if (!projectsFilter) {
    projectsToRender = filter(
      projects,
      (project) => !project.isFeaturedProject
    );
  }

  return (
    <div className="p-project-grid__container">
      {gridHeaderTitle && <h3>{gridHeaderTitle} Projects</h3>}
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
