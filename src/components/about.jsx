import React from "react";

import Footer from "./footer";

export default function About() {
  return (
    <div className="p-about">
      <div className="p-about__content">
        <div className="p-about__title">
          <h2>About Me</h2>
        </div>

        <div className="p-about__description">
          <p>👋 Hi there,</p>
          <h3 className="p-about__description_headline">
            Iʼm a software engineer by day and a film addict by night. Iʼm
            excited about the creative technologies that can bridge the gap
            between those two worlds.
          </h3>

          <p>
            My interests in tech and art have always been intertwined. This was
            especially true when I attended the{" "}
            <b>University of Pennsylvania</b> in 2012 where I was lucky to be
            part of small degree program called <b> Digital Media Design</b>, an
            interdisciplinary major that combined courses in computer graphics,
            media theory, and fine arts.
          </p>

          <p>
            After graduation, I hopped over to San Francisco to join what was
            then a relatively small company called <b>Slack</b> as a{" "}
            <b>frontend engineer</b>. I joined the company because of its
            reputation for prioritizing user experience design, the centrality
            of its frontend team to the product, and the general whimsy
            sprinkled throughout the app. Having been on the frontend messaging
            team for the past four years, I see my mission there as maintaining
            that attention to detail and excellent product experience for the
            individual user while simultaneously designing a system that can
            scale to millions of different people, both from a technical and
            product perspective.
          </p>

          <p>
            Having focused on my client engineering and interaction design
            skills for the past few years, I am looking for new opportunities to
            return to my creative roots, especially when it comes to animation
            and film. I think <b>modern creative technologies</b>, whether it be
            VR/AR or the like, will have a huge impact on the language of cinema
            and I want to be a part of the next generation that redefines the
            medium.
          </p>
        </div>
        <div className="p-about__heashot_containter">
          <img
            src={process.env.PUBLIC_URL + "/img/about-me/headshot1.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
