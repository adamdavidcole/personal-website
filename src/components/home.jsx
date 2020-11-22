import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { getSelectedProjectById, getProjectData } from "../utility";

import ProjectGrid from "./project-grid";
import ProjectContainer from "./project/project-container";
import FeaturedProjects from "./featured-projects";
import Footer from "./footer";

function RenderReelVideo() {
  return (
    <div className="p-reel__container">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          title="demo_reel"
          src="https://player.vimeo.com/video/480172715?autoplay=0&loop=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default function Home() {
  const projects = getProjectData();

  const { projectId, projectsFilter } = useParams();
  const { pathname } = useLocation();

  const isHomeRoute = pathname === "/";
  const selectedProject = getSelectedProjectById({ projectId });

  return (
    <div className="p-home">
      {isHomeRoute && <RenderReelVideo />}
      <ProjectContainer project={selectedProject} />
      {!projectsFilter && <FeaturedProjects projects={projects} />}
      <ProjectGrid projects={projects} />
      <Footer />
    </div>
  );
}
