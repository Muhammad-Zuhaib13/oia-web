"use client";
import PolygonBg from "@/app/components/common/PolygonBg";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
const Platforms: React.FC<any> = ({ data, locale }) => {
  const arDataSlider = [
    {
      id: "2",
      image: "/assets/images/home/jadarah-slide-img.jpg",
      icon: "/assets/images/home/jadarah-icon.svg",
      desc: "",
      title: "جدارة",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "https://jadarah.oia.gov.om/",
    },
    {
      id: "1",
      image: "/assets/images/home/qiman-slide-img.jpg",
      icon: "/assets/images/home/qimam-icon.svg",
      desc: "",
      title: "قمم",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "https://qimam.oia.gov.om/",
    },
    {
      id: "4",
      image: "/assets/images/home/future-of-oman-slide-img.jpg",
      icon: "/assets/images/home/future-fund-icon.svg",
      desc: "",
      title: "صندوق عمان المستقبل",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "https://www.futurefund.om/FutureFund/Home",
    },
    {
      id: "3",
      image: "/assets/images/home/e-procurement-slide-img.jpg",
      icon: "",
      desc: "",
      title: "تسجيل الموردين",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "http://supplier.oia.gov.om/",
    },
    {
      id: "6",
      image: "/assets/images/home/tiqat-slide-img.jpg",
      icon: "/assets/images/home/thiqat-icon.svg",
      desc: "",
      title: "ثقات",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "https://thiqat.oia.gov.om/index1.html",
    },
    {
      id: "5",
      image: "/assets/images/home/whistleblowing-slide-img.jpg",
      icon: "",
      desc: "",
      title: "الإبلاغ عن المخالفات",
      btn: "تعرف على المزيد",
      locale: locale,
      link: "/governance/whistleblow",
    }
  ];
  


  const enDataSlider = [
    {
      id: "2",
      image: "/assets/images/home/jadarah-slide-img.jpg",
      icon: "/assets/images/home/jadarah-icon.svg",
      desc: "Attract, Motivate, Develop, and Retain Top Talents.",
      title: "Jadarah",
      link:"https://jadarah.oia.gov.om/",
      btn: "Learn More",
      locale: locale,
    },
    {
      id: "1",
      image: "/assets/images/home/qiman-slide-img.jpg",
      icon: "/assets/images/home/qimam-icon.svg",
      desc: "SME research, development and innovation programmes.",
      title: "Qimam",
      link:"https://qimam.oia.gov.om/",
      btn: "Learn More",
      locale: locale,
    },

    {
      id: "4",
      image:
        "/assets/images/home/future-of-oman-slide-img.jpg",
      icon: "/assets/images/home/future-fund-icon.svg",
      desc: "Shaping the future of Oman through innovation and investment.",
      title: "Future of Oman",
      link:"https://www.futurefund.om/FutureFund/Home",
      btn: "Learn More",
      locale: locale,
    },

    {
      id: "3",
      image:
        "/assets/images/home/e-procurement-slide-img.jpg",
      icon: "", // Assuming this is the correct icon for E-Procurement
      desc: "Streamlining procurement processes for enhanced efficiency.",
      title: "E-Procurement",
      link:"http://supplier.oia.gov.om/",
      btn: "Learn More",
      locale: locale,
    },

    {
      id: "6",
      image: "/assets/images/home/tiqat-slide-img.jpg",
      icon: "/assets/images/home/thiqat-icon.svg",
      desc: "Apply for board memberships in Entities affiliated with OIA.",
      title: "Thiqat",
      link:"https://thiqat.oia.gov.om/index1.html",
      btn: "Learn More",
      locale: locale,
    },
    {
      id: "5",
      image:
        "/assets/images/home/whistleblowing-slide-img.jpg",
      icon: "",
      desc: "Confidentially report concerns related to unethical behavior.",
      title: "Whistleblowing",
      link:"/governance/whistleblow",
      btn: "Learn More",
      locale: locale,
    }
  ];

  const quicklink = {
    title: locale === "en" ? "Platforms" : "روابط المنصات ",
    para: "",
    locale: locale,
  };
  const qlSliderData =
    locale === "en" ? enDataSlider : arDataSlider;

  return (
    <PolygonBg>
      <div className="flex flex-col gap-[30px] lg:gap-[50px]  ">
        <SimpleHeadingandText data={quicklink} />
        <ScreenContainer>
          <div className="relative flex w-full flex-col gap-[12px] sm:gap-[18px] lg:gap-[50px]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              centeredSlides={false}
              freeMode={true}
              speed={11000}
              grabCursor={true}
              modules={[
                A11y,
                Navigation,
                FreeMode,
                Autoplay,
                Pagination,
              ]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              pagination={{
                clickable: true,
                el: ".custom-bullets", // Custom pagination selector
                renderBullet: function (index, className) {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              className="swiper-slider-common w-full abcd"
              loop={true}
            >
              {qlSliderData?.map((value, index) => (
                <SwiperSlide
                  virtualIndex={index}
                  key={index}
                  className="!w-auto ltr:mr-[12px] ltr:md:!mr-[24px] rtl:!ml-[12px] rtl:md:!ml-[24px]"
                >
                  <PlatfromCard
                    data={value}
                    locale={locale}
                    key={index}
                  />
                </SwiperSlide>
              ))}
              <div className="custom-bullets mt-[18px] flex justify-center lg:mt-[50px] lg:!hidden"></div>
            </Swiper>
          </div>
        </ScreenContainer>
      </div>
      {/* <Box
          className="sm:h-[332px] h-[300px] relative overflow-x-hidden overflow-y-clip resp-slider-contianer"
        >
          <ScreenContainer>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={false}
              speed={11000}
              freeMode={true}
              modules={[
                A11y,
                Navigation,
                FreeMode,
                Autoplay,
                Pagination
              ]}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView:"auto",
                  spaceBetween: 24,
                },
              }}
              pagination={{  
                clickable: true,
              }}
              className="simple-slider-swipper w-full !overflow-visible"
              loop={false}
            >
            {qlSliderData?.map((value, index) => (
                <SwiperSlide
                  virtualIndex={index}
                  key={index}
                  className="!w-auto ltr:mr-[12px] ltr:md:!mr-[24px] rtl:!ml-[12px] rtl:md:!ml-[24px]"
                >
                  <PlatfromCard
                    data={value}
                    locale={locale}
                    key={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ScreenContainer>
        </Box> */}
    </PolygonBg>
  );
};

export default Platforms;
