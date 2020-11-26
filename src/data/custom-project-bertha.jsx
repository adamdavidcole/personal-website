import React from "react";

function CustomDescriptionBertha() {
  return (
    <>
      <h3>The Story</h3>
      <p>
        At the beginning of the covid-19 quarantine, my friend and former
        writing partner came to me with an unexpected proposal: the film
        production company he worked for was commissioned to adapt a children’s
        fable into an animated short and he wanted me to help write the
        screenplay. In spite of having little experience with professional
        screenwriting, I thought it would be a good distraction while sheltering
        in place so I signed on to the project. A couple months later, we had a
        workshopped screenplay, a high level storyboard, and an online ad to
        hire a freelance animator to bring the story to life.
      </p>
      <p>
        Bertha tells the story of Debby, a young girl who learns the power of
        personal responsibility after being visited by a mysterious maid named
        Bertha. Debby gets her room magically cleaned by Bertha, but sees it
        fall back into ruin time-after-time leaving her feeling helpless. In the
        end, Bertha teaches Debby that in life, certain tasks can feel
        overwhelming, but they can be overcome with the right attitude and
        tools. She shares this final piece of advice before leaving Debby to
        finish cleaning her room on her own:
        <blockquote>
          <i>
            If you have a task and don’t know where to start,
            <br />
            And you feel like your world is falling apart,
            <br />
            <br />
            Too scary, too hard; you might want to quit,
            <br />
            But no! The answer is to start bit- by-bit!
          </i>
        </blockquote>
      </p>

      <div className="p-custom-project__image_container">
        <img
          style={{ width: "750px" }}
          src={process.env.PUBLIC_URL + "/img/bertha/still1.png"}
          alt=""
        />
        <div className="p-custom-project__image_caption">
          Still of Debby and Bertha in conversation from storyboard
        </div>
      </div>

      <h3>The Process</h3>
      <p>
        We were given the basic description of a fable the original author heard
        as a child from her grandmother. Without any details of the characters
        or setting, we began by breaking the notes we were given down and then
        building them back up as a more coherent story. We fleshed out the main
        characters, including how they dressed, talked, and behaved.
      </p>

      <div className="p-custom-project__image_container">
        <img
          style={{ width: "350px" }}
          src={process.env.PUBLIC_URL + "/img/bertha/concept-art.jpeg"}
          alt=""
        />
        <div className="p-custom-project__image_caption">
          Early sketch of lead character
        </div>
      </div>

      <p>
        We then got started on the script, breaking down the story scene by
        scene. Being in the early days of quarantine, we saw a relationship
        between this story about a girl whose surrounding perpetually felt
        stagnant and irredeemable, and our own personal situations of being
        trapped indoors with a similar feeling of stagnation. With that thought
        in the background, we shifted the moral of the story to lean into that
        parallel by sympathizing with the young girl’s feeling of being
        overwhelmed but also helping her see the small ways she could improve
        her surrounding (even if in the end, it’s still not perfect).
      </p>
      <p>
        We presented our adaptation to the original author, and she was pleased
        with our modern take on the story. After a few revisions, some
        discussions about length, and overall style, we got the green light from
        the executive producer and a small budget to move the project forward.
        We were tasked with hiring a freelance animation team, but before
        passing it off, we wanted to give the team a clear vision of our film so
        we created a comprehensive storyboard and corresponding animatic. The
        storyboard, while not covering the entirety of the script, gives a sense
        of the setting, character personalities, and camera rhythms. We passed
        these assets on to the producers alongside some concept art and
        potential artists for the project and are waiting to hear an update on
        the next steps for the project. You can check out a preview of the
        script{" "}
        <a
          style={{ textDecoration: "underline" }}
          href={process.env.PUBLIC_URL + "/img/bertha/Bertha - Screenplay.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <div className="p-custom-project__image_container p-custom-project__image_container--multi_image">
        <div className="p-custom-project__multi_image_container">
          <img
            src={process.env.PUBLIC_URL + "/img/bertha/still2-1.png"}
            alt=""
          />
          <img src={process.env.PUBLIC_URL + "/img/bertha/still3.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/img/bertha/still4.png"} alt="" />
        </div>
        <div className="p-custom-project__image_caption">
          Various stills from the Bertha storyboard
        </div>
      </div>
    </>
  );
}

export default CustomDescriptionBertha;
