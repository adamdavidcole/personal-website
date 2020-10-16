import React, { useEffect, useState } from "react";
import classNames from "classnames";

import animatedBrandstamp from "../assets/brandstamp-minified.gif";
import tightBrandstamp from "../assets/tight-brandstamp.gif";

function toggleScroll(enableScroll) {
  const nextBodyDisplayProp = enableScroll ? "scroll" : "hidden";
  document.getElementsByTagName("body")[0].style.overflow = nextBodyDisplayProp;
}

export default function PageLoader() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [endFadeOut, setEndFadeout] = useState(false);

  // preload page load gif
  useEffect(() => {
    toggleScroll(false);

    console.log("page-load", tightBrandstamp);
    const img = new Image();
    img.src = tightBrandstamp;
    img.onload = () => {
      setImageLoaded(true);
    };

    console.log("image", img);
  }, []);

  // on page load, initiate page load animation
  useEffect(() => {
    if (!imageLoaded) return;

    document.getElementById("p-page-loader__img").src = animatedBrandstamp;

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

  // if animation has completed to fadeout, don't render anything further
  if (endFadeOut) return null;

  const className = classNames("p-page-loader__page", {
    "p-page-loader__page--fadout": startFadeOut, // add fadeout css class to initiate css transition
  });

  return (
    <div className={className}>
      <div className="p-page-loader__image_container">
        <img id="p-page-loader__img" />
      </div>
    </div>
  );
}
