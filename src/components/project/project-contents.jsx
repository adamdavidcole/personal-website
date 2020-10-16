import React from "react";
import { useParams, Link } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

import { getAdjacentProjectUrl } from "../../utility";

import ProjectImageSlider from "./project-image-slider";
import ProjectImage from "./project-image";
import ProjectVimeoEmebd from "./project-vimeo-embed";
import ProjectDescription from "./project-description";

export default function ProjectContents({ project, onProjectClose }) {
  const { projectsFilter } = useParams();

  if (!project) return null;

  const { id: projectId, name, images, embed, vimeoEmbed } = project;

  const prevProjectUrl = getAdjacentProjectUrl({
    projectId,
    projectsFilter,
    getNext: false,
  });
  const nextProjectUrl = getAdjacentProjectUrl({
    projectId,
    projectsFilter,
    getNext: true,
  });

  return (
    <div className="p-project">
      <div className="p-project__navigation">
        <div className="p-project__navigation__left"></div>
        <div className="p-project__navigation__right">
          <Link className="p-project__navigation_button" to={prevProjectUrl}>
            Previous
          </Link>
          <span className="p-project__navigation_button_spacer">/</span>
          <Link className="p-project__navigation_button" to={nextProjectUrl}>
            Next project
          </Link>
          <span className="p-project__navigation_button_spacer">￨</span>
          <span onClick={onProjectClose}>𝘅</span>
        </div>
      </div>
      <div className="p-project__header">
        <h2>{name}</h2>
      </div>

      <div className="p-project__content">
        <ProjectImageSlider project={project} />
        <ProjectImage project={project} />
        <ProjectVimeoEmebd project={project} />
        <ProjectDescription project={project} />
      </div>
    </div>
  );
}
