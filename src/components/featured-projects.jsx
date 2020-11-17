import React from "react";
import { filter } from "lodash";
import { useParams } from "react-router-dom";

import { getProjectUrl } from "../utility";

import ProjectGridCard from "./project-grid-card";

import "./_pillar.featured_projects.css";

function FeaturedProjects({ projects }) {
  const { projectsFilter } = useParams();

  const featuredProjectData = filter(
    projects,
    (project) => project.isFeaturedProject
  );

  return (
    <div className="p-featured_projects">
      <h3>Featured Projects</h3>
      <div className="p-featured_projects__container">
        {featuredProjectData.map((project) => (
          <div className="p-featured_projects__item">
            <ProjectGridCard
              project={project}
              route={getProjectUrl({ projectId: project.id, projectsFilter })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
