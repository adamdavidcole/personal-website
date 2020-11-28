import React from "react";

import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="p-resume__file_container">
        <h2>Resume</h2>
        <iframe
          src={process.env.PUBLIC_URL + "AdamCole - CV.pdf"}
          className="p-resume__file"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
