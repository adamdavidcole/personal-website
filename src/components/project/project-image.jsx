import React from "react";
import { size } from "lodash";

export default function ProjectImage({ project }) {
  const { images } = project;
  if (size(images) !== 1) return null;

  return (
    <div className="p-project__image">
      <img src={process.env.PUBLIC_URL + images[0]} />
    </div>
  );
}
