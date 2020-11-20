import React from "react";

export default function ProjectDescription({ project }) {
  const { description, customDescription } = project;

  console.log("project", project);

  if (customDescription) return React.createElement(customDescription);

  return (
    <div className="p-project__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum nisi
      vel maximus suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. In bibendum nisi vel maximus suscipit.Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. In bibendum nisi vel maximus suscipit.Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. In bibendum nisi vel
      maximus suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In bibendum nisi vel maximus suscipit.
    </div>
  );
}
