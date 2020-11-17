import React from "react";
import { withRouter } from "react-router-dom";

function ProjectGridCard({ history, project, route }) {
  const thumbnailUrl = process.env.PUBLIC_URL + project.thubmnail;

  return (
    <div
      onClick={() => {
        history.push(route);
      }}
      className="p-project-grid-card"
    >
      <img src={thumbnailUrl} />
      <div className="p-project-grid-card__description">{project.name}</div>
    </div>
  );
}

export default withRouter(ProjectGridCard);
