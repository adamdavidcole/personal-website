import React, { useRef, useEffect, useState } from "react";
import { useParams, withRouter, Link } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

import ProjectContents from "./project-contents";

function animateOut({ projectRef, setIsAnimating }) {
  setIsAnimating(true);

  // get element height or window height (whichever is smaller to prevent animating out of frame)
  const element = projectRef.current;
  const elementHeight = Math.min(element.scrollHeight, window.innerHeight);

  // store element transition state
  var elementTransition = element.style.transition;
  element.style.transition = "";

  requestAnimationFrame(() => {
    // on next frame, explicitly set elements height in CSS style
    // so that we can animate from that value to 0
    element.style.height = `${elementHeight}px`;
    element.style.transition = elementTransition;
    requestAnimationFrame(() => {
      // transition height to 0
      element.style.height = "0px";
      setIsAnimating(false);
    });
  });
}

function animateIn({ projectRef, setIsAnimating }) {
  setIsAnimating(true);

  // get element height
  const element = projectRef.current;

  // get element height or window height (whichever is smaller to prevent animating out of frame)
  element.style.height = `auto`;
  const elementHeight = Math.min(element.scrollHeight, window.innerHeight);

  element.style.height = `0px`;

  requestAnimationFrame(() => {
    element.style.height = `${elementHeight}px`;

    setTimeout(() => {
      element.style.height = "auto";
      setIsAnimating(false);
    }, 250);
  });
}

function ProjectContainer({ project, history }) {
  smoothscroll.polyfill();

  const { projectsFilter } = useParams();

  const projectRef = useRef(null);
  const prevProjectIdRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const subroute = projectsFilter || "projects";

  useEffect(() => {
    if (!projectRef.current) return;

    if (!prevProjectIdRef.current) {
      // animate in project contents if not currently displaying project
      requestAnimationFrame(() => {
        animateIn({ projectRef, setIsAnimating });
      });
    }

    if (project && !isAnimating) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: projectRef.current.offsetTop - 30,
            left: 0,
            behavior: "smooth",
          });
        });
      }, 0);
    }

    prevProjectIdRef.current = project?.id;
  }, [project, projectRef]);

  function onProjectClose() {
    if (projectRef.current) {
      animateOut({ projectRef, setIsAnimating });
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      history.push(`/${subroute}`);
    }, 250);
  }

  return (
    <div className="p-project__container" ref={projectRef}>
      <ProjectContents project={project} onProjectClose={onProjectClose} />
    </div>
  );
}

export default withRouter(ProjectContainer);
