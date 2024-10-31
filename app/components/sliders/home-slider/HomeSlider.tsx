"use client";
import { Image } from "antd";
import React from "react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScreenContainer from "../../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../../simple-heading-text/SimpleHeadingandText";
import {setFontFamily} from "../../../data/data"

type InvestmentSliderDataSlide = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

type InvestmentSliderData = {
  slideOne: InvestmentSliderDataSlide;
  slideTwo: InvestmentSliderDataSlide;
  slideThree: InvestmentSliderDataSlide;
  slideFour: InvestmentSliderDataSlide;
};

type InvestmenstsData = {
  title: string;
  para: string;
  currentLang: string;
  slider: InvestmentSliderData;
};
type InvestmenstsDataProps = {
  data: InvestmenstsData;
};

const HomeSlider: React.FC<InvestmenstsDataProps> = ({
  data,
}) => {
  const investmentData = {
    title: data?.title,
    para: data?.para,
    locale:data?.currentLang
  };
  const sliderData = [
    {
      id: data?.slider.slideOne?.id,
      src: data?.slider.slideOne?.src,
      alt: data?.slider.slideOne?.alt,
      title: data?.slider.slideOne?.title,
      locale:data?.currentLang
    },
    {
      id: data?.slider.slideTwo?.id,
      src: data?.slider.slideTwo?.src,
      alt: data?.slider.slideTwo?.alt,
      title: data?.slider.slideTwo?.title,
      locale:data?.currentLang
    },
    {
      id: data?.slider.slideThree?.id,
      src: data?.slider.slideThree?.src,
      alt: data?.slider.slideThree?.alt,
      title: data?.slider.slideThree?.title,
      locale:data?.currentLang
    },
    {
      id: data?.slider.slideFour?.id,
      src: data?.slider.slideFour?.src,
      alt: data?.slider.slideFour?.alt,
      title: data?.slider.slideFour?.title,
      locale:data?.currentLang
    },
  ];
  return (
    <section className="home-slider mb-[88px] mt-[94px]">
      <div className="home-slider-container flex flex-col gap-[50px]">
        <SimpleHeadingandText
          data={investmentData}
        ></SimpleHeadingandText>
         <div className="home-slider-invest-high w-full relative">
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={24}
               centeredSlides={false}
               speed={11000}
               freeMode={false}
               loop={false}
              // autoplay={{
              //   delay: 1,
              //   disableOnInteraction: false,
              // }}
              modules={[
                A11y,
                Navigation,
                FreeMode,
                Autoplay,
              ]}
              className="home-slider-swipper w-full"
              
            >
              {sliderData?.map(
                (data: any, index: number) => (
                  <SwiperSlide
                    virtualIndex={index}
                    key={index}
                    className="w-full max-w-[618px] h-[480px]"
                  >
                    <div className="hs-card-container">
                      <Image
                        src={data?.src}
                        alt={data?.alt}
                        preview={false}
                        className="hs-img"
                      />
                      <div className="hs-img-gradient"></div>
                      <div className="hs-title">
                        <h3 className={`text-[24px] font-bold ${setFontFamily(data?.locale || "en", 'bold')} leading-[36px] text-[#FFFFFF]`}>
                          {data?.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
      </div>
    </section>
  );
};

export default HomeSlider;
