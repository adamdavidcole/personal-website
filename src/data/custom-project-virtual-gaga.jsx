import React from "react";

function CustomProjectVirtualGaga() {
  return (
    <>
      <p>
        <b>Source code:</b>{" "}
        <a href="https://github.com/adamdavidcole/html5realtimegaming">
          https://github.com/adamdavidcole/html5realtimegaming
        </a>
      </p>

      <p>
        <b>Virtual Gaga</b> was a web browser based game created as a method to
        research the potential for rich online gaming in 2016. At the time these
        technologies were incredibly cutting edge for web browsers, but the
        hypothesis set out that these technologies (such as Websockets and HTML5
        Canvas elements) could power exciting realtime online gaming scenarios.
        Over the past several years, adoption of these technologies confirmed
        the hypothesis with realtime massive multi-multiplayer HTML5 games
        proliferating across the web.
      </p>

      <p>
        The abstract of the research paper reads as follows:
        <blockquote>
          MMOGs have become extremely popular, but are usually restricted to
          specific consoles or platforms. New web technologies such as
          Websockets and the HTML5 Canvas element now allow for new cross
          platform multiplayer experiences. I plan to explore this new potential
          by creating an online multiplayer game which focuses on real time
          behavior relying only on technologies built in to the browser. With
          this approach, I hope to demonstrate the potential of these
          technologies as well as propel the movement into web based Massivly
          Multiplayer Online Games (MMOGs) forward.
        </blockquote>
      </p>

      <div className="p-custom-project__image_container">
        <video maxWidth="750px" controls>
          <source
            src={
              process.env.PUBLIC_URL + "/img/virtual_gaga/Virtual Gaga Demo.mp4"
            }
            type="video/mp4"
          />
        </video>
        <div className="p-custom-project__image_caption">
          Example of gameplay interaction for two players
        </div>
      </div>
    </>
  );
}

export default CustomProjectVirtualGaga;
