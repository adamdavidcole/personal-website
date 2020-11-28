import React from "react";

import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="p-resume__file_container">
        <h2>Resume</h2>
        <a
          className="p-resume__download_link"
          href={process.env.PUBLIC_URL + "AdamCole - CV.pdf"}
          download
        >
          Download resume
        </a>
        <iframe
          src={process.env.PUBLIC_URL + "AdamCole - CV.pdf"}
          className="p-resume__file"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
