import React from "react";

function PersonalWebsiteProject() {
  return (
    <>
      <h3>The Mission</h3>
      <p>
        I needed a home for my digital portfolio, and as a frontend developer,
        it seemed only natural to build one myself. The goal of this project was
        to design, build and publish a personal website that neatly expressed my
        personal brand. The site needed to be lightweight, easy to navigate and
        also easily extendable. Most importantly, it needed to succinctly
        showcase my mixed interests in software development, narrative film, and
        art.
      </p>

      <h3>The Process</h3>
      <h4>Design</h4>
      <p>
        Step one was to define my personal brand. At the heart of my education
        and career has always been my intersecting interests in technology and
        art with a particular passion for film. I wanted my website to make that
        aspect of my personality immediately clear, so I made the primary text
        and navigation bar for my site read “Code | Film | Art”. Beneath the
        navigation bar would be a grid of my personal projects mixed together
        which could be further filtered down by clicking one of the buttons in
        the navigation bar.
      </p>
      <p>
        Once I had decided on the basic structure and interaction of the site, I
        needed to define the basic look and feel. I started with sketching
        several dozen concepts for a personal logo, and after many revision,
        tangents, and scrapped ideas, I converted the most promising ideas to
        digital files in Adobe Illustrator. My favorite ideas played with the
        contrasting primitive shapes in my initials: the clear triangle in my
        first initial and the circular curve in my second initial. As someone
        who’s spent much of my creative career using digital tools like
        Illustrator and Autodesk Maya, I felt highlighting these primitive
        shapes was a fitting metaphor for a digital media design portfolio.
      </p>
      <p>
        Both had charming qualities and I mocked both of them up in a quick web
        prototype. The second concept was fun, colorful, and had a lot of
        potential to create a very dynamic visual brand across various mediums.
        The primary colors reinforced the concept of involving the primitive
        building blocks of design in the logotype itself, and also reminded me
        of the primary colors within a computer pixel. I liked it so much, I
        even tried creating an animated version of it.
      </p>
      <p>
        After working through several more polished iterations, I settled on a
        personal brand logo which subtly references the three primitive shapes
        (triangle, circle, rectangle) while still being clean, flexible and
        usable in nearly any context. With my logo designed and the basic
        structure of my website in place, I was able to finish up a basic mock
        of the homepage. The next step was converting it from an Illustrator
        file to something actually usable.
      </p>

      <h4>Build</h4>
      <p>
        The guiding principle behind the architecture of my site was to separate
        the project data from its presentation. This allows me to easily add or
        remove projects without breaking the site structure. Similarly, I could
        visually rebrand the site without destroying the portfolio data. This
        concept is reflected in the very project structure itself: all portfolio
        data lives in the data/ directory and all the presentational code lives
        in components/. The project data itself is a JSON format with various
        template fields that can optionally be included or left out, such as
        “description”, “images”, or “video” giving the site further flexibility.
      </p>
      <p>
        The first step to building the site was getting the bones in place,
        which meant setting up the core pages, routes, and navigation. Using a
        mock “projects” data file, I built the primary project grid and project
        page. Once I saw the basic structure of my site set up, I felt that the
        central grid did not have a clear enough entry point for the user to
        explore my work so I opted to add a “Featured Projects” section as well
        as a prominent portfolio reel as an introduction to the site. I then
        started to fill out the project data with my work while continuing to
        refine the user experience, attempting to make the navigation between
        projects feel as fluid as possible.{" "}
      </p>
      <p>
        I am continuing to polish the site design, content, and code underlying
        it, but overall I feel that I successfully fulfilled the mission I set
        out on to build a lightweight, extendable personal website that
        seamlessly exhibits my diverse skillset.{" "}
      </p>
    </>
  );
}

export default PersonalWebsiteProject;