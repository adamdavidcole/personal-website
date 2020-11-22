import React, { useEffect, useRef } from "react";
import { map, size } from "lodash";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export default function ProjectImageSlider({ project }) {
  const { images } = project;

  const imageSliderRef = useRef(null);

  useEffect(() => {
    // TODO: this is a hack to fix a bug with the image slider having an incorrect orientation
    // when moving from one project with images to the next -- there is likely a cleaner solution to this issue
    window.dispatchEvent(new Event("resize"));
  }, [project]);

  if (size(images) <= 1) return null;

  return (
    <div className="p-project__images" ref={imageSliderRef}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={500}
      >
        {map(images, (imageUrl) => (
          <SwiperSlide>
            <div className="p-project__slide_container">
              <img src={process.env.PUBLIC_URL + imageUrl} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
