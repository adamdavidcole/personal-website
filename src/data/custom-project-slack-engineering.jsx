import React from "react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function CustomProjectSlackEngineering() {
  return (
    <>
      <div
        className="p-custom-project__image_container"
        style={{ marginTop: "0" }}
      >
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/slack-frontend-engineering/slack-features.jpg"
          }
          alt=""
        />
      </div>
      <p>
        For the past four years, I have been working as a frontend developer on
        the messaging team at Slack.
      </p>

      <h3>The Mission</h3>
      <p>
        My mission at Slack is to create delightful messaging experiences at a
        massive scale. Since joining in 2016, I have been one of a handful of
        frontend engineers working on the messaging team where our focus is
        implementing the core product features of the desktop application using
        React, Typescript, Less, and a sprinkle of PHP when we need to peak at
        the backend.
      </p>
      <p>
        For those unfamiliar with the product, Slack is an enterprise
        communication platform aiming to become the central hub where people can
        work together more effectively. I joined the company in 2016 because of
        its reputation for creating exceptional user experiences, something
        previously unexpected in enterprise software.
      </p>
      <p>
        <b>
          Over my four years at slack, I learned how to create flexible web
          products that can support the diverse needs of individuals while at
          the same time delivering a massive platform where over a billion
          messages are sent a day.
        </b>{" "}
        Below is a sample of some of the projects I launched during my tenure
        there including message threading, multi-file upload, rich text
        composition and all things emoji 😜.
      </p>
      <h3>The Projects</h3>
      <h4>Threads</h4>
      <p>
        My first major project at Slack was Threads, a top company priority in
        2016. Message threading is a feature that allows for asynchronous
        communication in a chat context by allowing users to respond to
        individual messages at any point in time as opposed to sending a message
        to the entire channel.{" "}
      </p>
      <p>
        This massive project introduced me to many of the skills required of
        frontend engineers that I continued to refine over the following three
        years. On the technical side of things, I learned how to work with a
        cross-functional team of backend and client developers to write
        technical proposals, define APIs, and how to bring features to life
        using web technologies. The most essential lesson was how to collaborate
        with others: on a feature as large as this one spanning all layers of
        our tech stack we needed to be in sync with any decisions made or when
        unexpected issues arose.
      </p>
      <p>
        On the design side of things, I learned how to work with product
        managers and designers to iterate on a product idea. At the time,
        Threads was the biggest change to the way Slack worked and it was
        essential the experience was intuitive and effective. I gained practice
        in prototyping, revising, and eventually polishing features. I learned
        that there is no such thing as getting a design perfect in a mock and
        the value of working closely with designers to test out ideas and then
        refine them.
      </p>
      <p>
        Day-to-day, I worked alongside another frontend engineer to develop all
        aspects of the feature on the desktop app including how we modeled the
        data internally, how we displayed threads visually, and the user
        interactions to start, read and update a thread.
      </p>
      <p>
        <b>
          Overall, the Threads project taught me what it actually meant to be a
          product engineer.
        </b>
      </p>

      <div className="p-custom-project__image_container">
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/slack-frontend-engineering/image1.gif"
          }
          alt=""
        />
        <div className="p-custom-project__image_caption">
          Example of viewing and replying to a thread
        </div>
      </div>

      <h4>Multi-file Upload</h4>
      <p>
        Multi-file upload is a feature I worked on in 2019 to allow users to
        upload up to 10 files simultaneously. Before this feature, a sent
        message could contain at most one file which could be frustrating for
        users trying to reference multiple files at a time.
      </p>
      <p>
        I was the lead frontend developer on this project which had two
        interesting aspect:
        <ul>
          <li>
            Technically, this feature required moving to a new backend
            infrastructure for how we managed files. On the frontend, that meant
            writing a new `Upload Queue` module that took advantage of the new
            APIs and could mange parallel uploads. This code path is used
            millions of times a day.
          </li>
          <li>
            Visually, this featured required a new way to display groups of
            files in a compact manner to prevent taking up too much screen
            real-estate when a message contained more than one file. I worked
            closely with my team’s product designer to define the rules, grids,
            and styles necessary to accomplish that goal and gracefully moving
            between those sates depending on the message context. Below are some
            examples of those layouts and interactions:{" "}
          </li>
        </ul>
      </p>

      <div className="p-project__images">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={500}
        >
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/image2.gif"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Example of image grid responsiveness at various sizes
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/compact-layout.png"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Example of multi-image grid in channel context
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/grid-rules.png"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Preview of various rules defining file grids
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/file-upload-UI.png"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Frontend UI for uploading multiple files
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <h4>Rich Text Composition</h4>
      <p>
        The rich text composition project was a massive, cross-functional effort
        to allow WYSIWYG ("what you see is what you get”) message formatting for
        basic text styles like bold, italic, and lists. I worked alongside a
        full stack team and specifically with two other frontend engineers to
        deliver this end-to-end user experience.
      </p>
      <p>
        Notable aspects of the project were:
        <ul>
          <li>
            Creating a completely new message format for Slack messages on our
            backend and clients that could support the rich formatting features
            users expected. This required months of technical planning, getting
            buy in from the many impacted parties, building prototypes, figuring
            out the nitty-gritty details of transitioning from one system to the
            next, and finally, actually writing the code to bring this plan to
            fruition.
          </li>
          <li>
            On the frontend side of things, we split the work into two major
            milestones: message rendering (visually displaying the new message
            type across the Slack app) and message composition (the various UI
            affordances to allow users to format their messages).
          </li>
          <li>
            The work required in building a rich text editor requires an
            impeccable attention of detail as the types of input and methods of
            formatting are numerous. My specific focus was on typography of the
            rendered messages, markdown formatting conversion, and
            auto-hyperlinking URLs.
          </li>
        </ul>
      </p>

      <div className="p-custom-project__image_container">
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/slack-frontend-engineering/image3.gif"
          }
          alt=""
        />
        <div className="p-custom-project__image_caption">
          Rich text formatting using toolbar
        </div>
      </div>

      <h4>Emoji</h4>
      <p>
        A personal passion of mine at the company was working on Emoji which are
        central to Slack’s brand and product (they are used in almost every
        corner of the app). Some exciting emoji work includes:
        <ul>
          <li>
            Fully rearchitecting how emoji are modeled, rendered and composed on
            the frontend when we converted our legacy codebase to React in 2018
          </li>
          <li>
            Leading a cross functional team to update our standard emoji data
            across our clients to bring new emoji to our users
          </li>
          <li>
            Developing the technical plan and implementation for emoji
            internationalization: a feature which allows emoji use in
            non-english locales (for example in search, autocomplete, and
            textual rendering).
          </li>
          <li>
            Developing and filing a patent for emoji solidarity: a feature that
            encouraged skin tone representation by consolidating emoji reactions
            of the same emoji but different skin tone into the same reaction
            bubble. We described the motivation in the design proposal as
            follows:
            <blockquote>
              In light of all of the social unrest and injustice happening in
              the world, this is a small way for Slack to bring unity &
              solidarity when it comes to emoji.
            </blockquote>
          </li>
        </ul>
      </p>
      <div className="p-project__images">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={500}
        >
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/image4.png"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Emoji solidarity example
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-project__slide_container">
              <div className="p-custom-project__image_container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/slack-frontend-engineering/thumbnail-jp-emoji.png"
                  }
                  alt=""
                />
                <div className="p-custom-project__image_caption">
                  Japanese emoji experience
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CustomProjectSlackEngineering;
