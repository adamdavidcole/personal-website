import React from "react";
import { Link } from "react-router-dom";
import AdamDavidColeStylizedName from "../assets/AdamDavidCole-StylizedName.svg";
import brandstamp from "../assets/brandstamp.svg";
import simpleBrandstamp from "../assets/thicker-brandstamp-simple-36.svg";

export default function Header() {
  return (
    <div className="p-header">
      <div className="p-header__brandstamp">
        <img src={brandstamp} />
      </div>

      <div className="p-header__top_bar">
        <div className="p-header__title_container--dmd">
          <div className="p-header__brandstamp--dmd">
            <img src={simpleBrandstamp} />
          </div>
          <Link to="/">
            <div className="p-header__title--dmd">
              <h1 className="p-header__title_text--dmd">Adam Cole</h1>
              <h2 className="p-header__subtitle_text--dmd">
                Digital Media Design
              </h2>
            </div>
          </Link>
        </div>

        <div className="p-header__nav_group p-header__navigation_filters--pages">
          <Link to="/about">About</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/resume">Resume</Link>
        </div>
      </div>

      <div className="p-header__navigation">
        <div className="p-header__nav_group p-header__navigation_filters--filters">
          <Link to="/code">Code</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/film-animation">Film & Animation</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/art">Art</Link>
        </div>
      </div>
    </div>
  );
}
