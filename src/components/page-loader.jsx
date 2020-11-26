import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import animatedBrandstamp from "../assets/brandstamp-minified.gif";
import tightBrandstamp from "../assets/tight-brandstamp.gif";

function toggleScroll(enableScroll) {
  const nextBodyDisplayProp = enableScroll ? "scroll" : "hidden";
  document.getElementsByTagName("body")[0].style.overflow = nextBodyDisplayProp;
}

export default function PageLoader() {
  const { pathname } = useLocation();

  const isHomeRoute = pathname === "/";

  const [imageLoaded, setImageLoaded] = useState(false);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [endFadeOut, setEndFadeout] = useState(false);

  // preload page load gif
  useEffect(() => {
    if (!isHomeRoute) return;

    toggleScroll(false);

    const img = new Image();
    img.src = tightBrandstamp;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  // on page load, initiate page load animation
  useEffect(() => {
    if (!imageLoaded) return;

    const imageLoader = document.getElementById("p-page-loader__img");
    if (!imageLoader) return null;

    imageLoader.src = animatedBrandstamp;

    setTimeout(() => {
      setStartFadeOut(true);
    }, 3000);
  }, [imageLoaded]);

  // on animation complete, fade out the graphic
  useEffect(() => {
    if (!startFadeOut) return;

    setTimeout(() => {
      toggleScroll(true);
      setEndFadeout(true);
    }, 1000);
  }, [startFadeOut]);

  // only show the loading animation when arriving to the home page
  if (!isHomeRoute) return null;

  // if animation has completed to fadeout, don't render anything further
  if (endFadeOut) return null;

  const className = classNames("p-page-loader__page", {
    "p-page-loader__page--fadout": startFadeOut, // add fadeout css class to initiate css transition
  });

  return (
    <div className={className}>
      <div className="p-page-loader__image_container">
        <img
          id="p-page-loader__img"
          alt="Adam Cole: Digital Media Design page loading"
        />
      </div>
    </div>
  );
}

// ensure on refreshes that we reset to the top of the page so the page loader renders correctly
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
