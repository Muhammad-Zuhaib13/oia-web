"use client";

import { Image } from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import {setFontFamily} from "../../data/data"
import Box from '@mui/material/Box'
type SliderItem = {
  id: number | string;
  src: string;
  alt: string;
  title: string;
  locale?: string;
};

type SimpleSliderDataType = {
  title: string;
  para: string;
  sliderData: SliderItem[];
  locale?:string;
};

type SimpleSliderProps = {
  data: SimpleSliderDataType;
};

const SimpleSlider: React.FC<SimpleSliderProps> = ({ data }) => {
  return (
    <section className="simple-slider lg:pb-[88px] lg:pt-[94px] sm:py-[50px] py-[20px]">
      <div className="simple-slider-container flex flex-col sm:gap-[50px] gap-[20px]">
        <ScreenContainer>
          <div className="flex w-full flex-col lg:gap-[24px] max-w-[988px] md:gap-[33px] gap-[6px]">
            <h2 className={`text-[#9E8557] sm:text-[36px] sm:leading-[81.32px] ${setFontFamily(data?.locale || "en", 'bold')} font-bold text-[20px] leading-[42.71px]`}>
              {data?.title}
            </h2>
            <p className={`${setFontFamily(data?.locale || "en", 'medium')} lg:text-[18px] font-medium lg:leading-[27px] text-[#202020] md:text-[26px] md:leading-[38px] text-[14px] leading-[20px]`}>
              {data?.para}
            </p>
          </div>
        </ScreenContainer>
        <Box className="simple-slider-container-swiper" sx={{ "@media (min-width: 1024px)":{display:"block"},"@media (max-width: 1023px)":{display:"none"}}}>
        <ScreenContainer>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            centeredSlides={false}
            speed={11000}
            freeMode={true}
            modules={[A11y, Navigation, FreeMode, Autoplay]}
            className="simple-slider-swipper w-full"
            loop={false}
          >
            {data?.sliderData?.map((item: SliderItem, index:number) => (
              <SwiperSlide
                virtualIndex={index}
                key={item?.id}
                className="w-full max-w-[618px] ss-slide"
              >
                <div className="ss-card-container">
                  <Image
                    src={item?.src}
                    alt={item?.alt}
                    preview={false}
                    className="ss-img"
                  />
                  <div className="ss-img-gradient"></div>
                  <div className={`ss-title absolute ${item?.locale === "en" ? "ml-[30px]":"mr-[30px]"} mb-[30px] ${item?.locale === "en" ? "left-0":"right-0"} bottom-0 `}>
                    <h3 className={`text-[24px] ${setFontFamily(item?.locale || "en", 'bold')} font-bold leading-[36px] text-[#FFFFFF]`}>
                      {item?.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </ScreenContainer>
        </Box>
        <Box className="simple-slider-container-swiper" sx={{ "@media (min-width: 1024px)":{display:"none"},"@media (max-width: 1023px)":{display:"block"}}}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            centeredSlides={false}
            speed={11000}
            // autoplay={{
            //   delay: 1,
            //   disableOnInteraction: false,
            // }}
            freeMode={true}
            modules={[A11y, Navigation, FreeMode, Autoplay]}
            className="simple-slider-swipper w-full"
            loop={false}
          >
            {data?.sliderData?.map((item: SliderItem, index:number) => (
              <SwiperSlide
                virtualIndex={index}
                key={item.id}
                className={`ss-slide ${index===0 && item?.locale ==="en" && "sm:ml-[60px] ml-[20px]"} ${index===0 && item?.locale ==="ar" && "sm:mr-[60px] mr-[20px]"} ${index===data?.sliderData?.length -1 && item?.locale ==="en" ? "sm:mr-[60px] mr-[20px]":"mr-arabic"}`}
              >
                <div className="ss-card-container">
                  <Image
                    src={item?.src}
                    alt={item?.alt}
                    preview={false}
                    className="ss-img"
                  />
                  <div className="ss-img-gradient"></div>
                  <div className={`ss-title absolute ${item?.locale === "en" ? "ml-[20px]":"mr-[30px]"} ${item?.locale === "en" ? "left-0":"right-0"} bottom-0 mb-[24px]`}>
                    <h3 className={`${setFontFamily(item?.locale || "en", 'bold')} font-bold text-[#FFFFFF] sm:text-[32px] sm:leading-[38px] text-[18px] leading-[21.8px]`}>
                      {item?.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </div>
    </section>
  );
};

export default SimpleSlider;
