import React from "react";

export default function ProjectDescription({ project }) {
  const { description, customDescription } = project;

  return (
    <div className="p-project__description">
      {customDescription ? React.createElement(customDescription) : description}
    </div>
  );
}
