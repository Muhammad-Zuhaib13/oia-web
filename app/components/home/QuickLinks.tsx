"use client";
import Box from "@mui/material/Box";
import React from "react";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import PlatfromCard from "./PlatformCard";
type QuickLinksSlide = {
  id: string;
  image: string;
  icon: string;
  desc: string;
  title: string;
  btn: string;
};

type QuickLinksSliderData = {
  slideFive: any;
  slideOne: QuickLinksSlide;
  slideTwo: QuickLinksSlide;
  slideThree: QuickLinksSlide;
  slideFour: QuickLinksSlide;
};

type QuickLinksTitle = {
  title: string;
  para: string;
  btnText: string;
  currentLang: string;
  slider: QuickLinksSliderData;
};
type QuickLinksProps = {
  data: QuickLinksTitle;
};
const QuickLinks: React.FC<QuickLinksProps> = ({
  data,
}) => {
  const quicklink = {
    title: data?.title,
    para: data?.para,
    locale: data?.currentLang,
  };
  const qlSliderData = [
    {
      id: data?.slider?.slideOne?.id,
      image: data?.slider?.slideOne?.image,
      icon: data?.slider?.slideOne?.icon,
      desc: data?.slider?.slideOne?.desc,
      title: data?.slider?.slideOne?.title,
      btn: data?.slider?.slideOne?.btn,
      locale: data?.currentLang,
    },
    {
      id: data?.slider?.slideTwo?.id,
      image: data?.slider?.slideTwo?.image,
      icon: data?.slider?.slideTwo?.icon,
      desc: data?.slider?.slideTwo?.desc,
      title: data?.slider?.slideTwo?.title,
      btn: data?.slider?.slideTwo?.btn,
      locale: data?.currentLang,
    },
    {
      id: data?.slider?.slideThree?.id,
      image: data?.slider?.slideThree?.image,
      icon: data?.slider?.slideThree?.icon,
      desc: data?.slider?.slideThree?.desc,
      title: data?.slider?.slideThree?.title,
      btn: data?.slider?.slideThree?.btn,
      locale: data?.currentLang,
    },
    {
      id: data?.slider?.slideFour?.id,
      image: data?.slider?.slideFour?.image,
      icon: data?.slider?.slideFour?.icon,
      desc: data?.slider?.slideFour?.desc,
      title: data?.slider?.slideFour?.title,
      btn: data?.slider?.slideFour?.btn,
      locale: data?.currentLang,
    },
    {
      id: data?.slider?.slideFive?.id,
      image: data?.slider?.slideFive?.image,
      icon: data?.slider?.slideFive?.icon,
      desc: data?.slider?.slideFive?.desc,
      title: data?.slider?.slideFive?.title,
      btn: data?.slider?.slideFive?.btn,
      locale: data?.currentLang,
    },
  ];
  const locale = data?.currentLang;
  return (
    // <div className="bg-[#FEFAF1] ">
    <div className="bg-[url('/assets/images/light-pattern-bg.png')] bg-cover py-[40px] sm:py-[50px] lg:py-[90px]">
      <SimpleHeadingandText data={quicklink} />
      <ScreenContainer>
        <div className="mb-[60px] mt-[30px] hidden items-center gap-[16px] lg:flex">
          <button className="flex h-[30px] w-auto cursor-default flex-row items-center gap-[8px] font-bold lg:h-[48px]">
            <span
              className={`text-[16px] leading-[9.57px] sm:text-[24px] sm:leading-[17.06px] lg:text-[18px] lg:leading-[22px] ${setFontFamily(locale, "bold")} font-bold  text-[#9F8555]`}
            >
              {data?.btnText}
            </span>
            <span
              className={`btn-circle-hover flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#594226] pl-[2px] sm:h-[40px] sm:w-[40px] lg:h-[48px] lg:w-[48px] ${locale === "en" ? "" : "btn-ar-img-rotate"}`}
            >
              <img
                src="/assets/icons/chervon-left-white.svg"
                className="relative z-10 h-[9px] w-[6px] lg:h-[14px] lg:w-[9px]"
                alt="chevron"
              />
            </span>
          </button>
        </div>
      </ScreenContainer>

      <Box
        className=""
        sx={{
          "@media (min-width: 1024px)": {
            display: "block",
          },
          "@media (max-width: 1023px)": { display: "none" },
        }}
      >
        <ScreenContainer>
          <div className="flex justify-between">
            {qlSliderData?.map((data, index) => {
              return (
                <PlatfromCard
                  data={data}
                  locale={locale}
                  key={index}
                />
              );
            })}
          </div>
        </ScreenContainer>
      </Box>
      <Box
        className="sm:h-[280px] h-[260px] relative mt-[30px] sm:mt-[50px]"
        sx={{
          "@media (min-width: 1024px)": { display: "none" },
          "@media (max-width: 1023px)": {
            display: "block",
          },
        }}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={24}
          centeredSlides={false}
          speed={11000}
          freeMode={true}
          modules={[
            A11y,
            Navigation,
            FreeMode,
            Autoplay,
          ]}
          breakpoints={{
            480: {
              spaceBetween: 12,  
            },
          }}
          className="simple-slider-swipper w-full"
          loop={false}
        >
          {qlSliderData?.map((value, index) => (
            <SwiperSlide
              virtualIndex={index}
              key={index}
              className={`!w-auto ${index === 0 && value?.locale === "en" ? "ml-[20px] sm:ml-[60px]" : ""} ${index === qlSliderData?.length - 1 && value?.locale === "en" ? "mr-[20px] sm:mr-[60px]" : ""} ${index === 0 && value?.locale === "ar" ? "mr-[20px] sm:mr-[60px]" : ""}`}
            >
              <PlatfromCard
                data={value}
                locale={locale}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default QuickLinks;
