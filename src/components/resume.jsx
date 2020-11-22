import React from "react";

import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="p-resume__file_container">
        <iframe
          src={process.env.PUBLIC_URL + "AdamCole - CV.pdf"}
          width="100%"
          height="1000px"
          margin="30px"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
