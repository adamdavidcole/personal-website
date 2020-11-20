import { filter, find, findIndex, map } from "lodash";

import projectsData from "../data/projects.json";
import getCustomProjectDescription from "../data/ge-custom-project-description";

export function getProjectData() {
  return map(projectsData, (project) => {
    const customDescription = getCustomProjectDescription({
      projectId: project.id,
    });

    return {
      ...project,
      customDescription,
    };
  });
}

export function getProjectUrl({ projectId, projectsFilter }) {
  const subroute = projectsFilter || "projects";
  return `/${subroute}/${projectId}`;
}

export function getFilteredProjects({ projectsFilter }) {
  const projects = getProjectData();

  return projectsFilter
    ? filter(projects, (project) => project.category === projectsFilter)
    : projects;
}

export function getSelectedProjectById({ projectId }) {
  const projects = getProjectData();
  return find(projects, (project) => project.id === projectId);
}

export function getAdjacentProjectUrl({
  projectId,
  projectsFilter,
  getNext = true,
}) {
  const filteredProjects = getFilteredProjects({ projectsFilter });
  const indexOfSelectedProject = findIndex(
    filteredProjects,
    (project) => project.id === projectId
  );

  const positionChange = getNext ? 1 : -1;
  let indexOfNextProject = indexOfSelectedProject + positionChange;

  const lastIndex = filteredProjects.length - 1;
  if (indexOfNextProject === -1) {
    indexOfNextProject = lastIndex;
  } else if (indexOfSelectedProject === lastIndex) {
    indexOfNextProject = 0;
  }
  const nextProject = filteredProjects[indexOfNextProject];
  return getProjectUrl({ projectId: nextProject.id, projectsFilter });
}
