import { filter, find, findIndex } from "lodash";

import projects from "../data/projects.json";

export function getProjectUrl({ projectId, projectsFilter }) {
  const subroute = projectsFilter || "projects";
  return `/${subroute}/${projectId}`;
}

export function getFilteredProjects({ projectsFilter }) {
  return projectsFilter
    ? filter(projects, (project) => project.category === projectsFilter)
    : projects;
}

export function getSelectedProjectById({ projectId }) {
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
