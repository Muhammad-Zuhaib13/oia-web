"use client";
import React from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import GalleryCard from "./GalleryCard";

import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination 
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = ({ data }: any) => {
const { InjazEjazCards } = data;

  return (
    <div className="lg:pb-[100px] pb-[60px]">
      <div className="flex flex-col lg:gap-[50px] sm:gap-[32px] gap-[40px]">
        <div>
          <SimpleHeadingandText data={data} />
        </div>
        <div>
          <ScreenContainer>
          <Swiper
                slidesPerView={"auto"}
                centeredSlides={false}
                // width={"auto"}
                freeMode={true}
                modules={[
                  A11y,
                  Navigation,
                  FreeMode,
                  Autoplay,
                  Pagination
                ]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-bullets",
                  renderBullet: function (index, className) {
                    return `<span class="${className} custom-bullet"></span>`;
                  },
                }}
                className="swiper-slider-test w-full "
              >
                <div className="flex">
                  {data?.card?.map(
                    (data: any, index: any) => {
                      return (
                        <SwiperSlide key={data.id}>
                            <GalleryCard data={data}/>
                        </SwiperSlide>
                      );
                    },
                  )}
                </div>
                <div className="relative flex custom-bullets justify-center mt-[50px]"></div>
              </Swiper>
              
          </ScreenContainer>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
