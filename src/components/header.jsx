import React from "react";
import { Link } from "react-router-dom";
import AdamDavidColeStylizedName from "../assets/AdamDavidCole-StylizedName.svg";
import brandstamp from "../assets/brandstamp.svg";
import simpleBrandstamp from "../assets/simple-brand-ac.svg";

export default function Header() {
  return (
    <div className="p-header">
      <div className="p-header__brandstamp">
        <img src={brandstamp} />
      </div>

      <div className="p-header__title_container--dmd">
        <div className="p-header__brandstamp--dmd">
          <img src={simpleBrandstamp} />
        </div>
        <Link to="/">
          <div className="p-header__title--dmd">
            <div className="p-header__title_text--dmd">Adam Cole</div>
            <div className="p-header__subtitle_text--dmd">
              Digital Media Design
            </div>
          </div>
        </Link>
      </div>

      {/* <div className="p-header__title">
        <Link to="/">
          <img src={AdamDavidColeStylizedName} />
        </Link>
      </div> */}

      {/* <div className="p-header__title">
        <Link to="/">Adam David Cole</Link>
      </div> */}

      <div className="p-header__navigation">
        <div className="p-header__nav_group p-header__navigation_filters--filters">
          <Link to="/code">Code</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/film-animation">Film & Animation</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/art">Art</Link>
        </div>
        <div className="p-header__nav_group p-header__navigation_filters--pages">
          <Link to="/about">About</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/resume">Resume</Link>
          <span className="p-header__navigation_dot">·</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
