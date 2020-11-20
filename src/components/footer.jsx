import React from "react";

function Footer() {
  return (
    <>
      <div className="p-footer">
        <a href="https://www.linkedin.com/in/adamdcole/" target="_blank">
          [LinkedIn]
        </a>
        <span className="p-footer__spacer" target="_blank">
          ·
        </span>
        <a href="https://github.com/adamdavidcole" target="_blank">
          [Github]
        </a>
        <span className="p-footer__spacer">·</span>
        <a href="https://vimeo.com/adamdcole" target="_blank">
          [Vimeo]
        </a>
      </div>
      <div className="p-footer__sign_off">
        Coded with <span className="p-footer__sign_off_heart">❤︎</span> in San
        Francisco 2020
      </div>
    </>
  );
}

export default Footer;
