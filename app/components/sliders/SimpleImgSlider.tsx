"use client";
import "swiper/css";
import "swiper/css/navigation";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScreenContainer from "../screencontainer/ScreenContainer";
const SimpleImgSlider = ({ data, locale, style }: any) => {
  const { sliderData } = data || {};
  const handleRoute = (link: string) => {
    if (link) {
      window.open(link, "_blank", 'noopener,noreferrer'); 
    }
  };
  return (
    <div
      className={`relative mb-[60px]  h-[70px] lg:mb-[100px]  ${style}`}
    >
      <ScreenContainer>
        <div className="rounded-[6px] bg-[#fff] py-[20px]">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={false}
            speed={11000}
            freeMode={true}
            modules={[A11y, Navigation, FreeMode, Autoplay]}
            pagination={{
              clickable: true,
            }}
            className="slider-brand  w-full"
            loop={false}
          >
            {data?.map((item: any, index: number) => (
              <SwiperSlide
                virtualIndex={index}
                key={item?.id}
                className="!w-auto ltr:mr-[12px] ltr:md:!mr-[92px] rtl:!ml-[12px] rtl:md:!ml-[92px] cursor-pointer"
                onClick={() => handleRoute(item?.link)}
              >
                <div className="flex h-auto w-auto">
                  <div className="h-[60px] w-auto">
                    <img
                      src={item?.src}
                      alt={item?.alt}
                      className="h-full w-full rounded-[4px] object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default SimpleImgSlider;
