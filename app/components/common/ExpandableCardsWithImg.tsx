"use client";
import { useState } from "react";
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
import ExpandingCard from "../common/ExpandingCard";
import ScreenContainer from "../screencontainer/ScreenContainer";
const ExpandableCardsWithImg = ({
  data,
  locale,
  classNameContainer = "",
}: any) => {
  const {
    title = "",
    subTitle = "",
    paras = [],
    mainImg = "",
    cards = [],
  } = data || {};
  const [activeAccordion, setActiveAccordion] = useState<
    number | null
  >(null);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <ScreenContainer>
      <div
        className={`flex flex-col gap-[20px] lg:gap-[30px] ${classNameContainer} py-[60px] lg:py-[100px] `}
      >
        {/* title */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px]">
          <h2
            className={`mainHeading  rtl:font-TajawalBold text-bold`}
          >
            {title}
            <span className="subHeading !text-brown rtl:font-TajawalBold">
              {subTitle}
            </span>
          </h2>
          {paras &&
            paras?.map((para: any, index: number) => {
              return (
                <div key={index}>
                  <p
                    className={`paragraph rtl:font-TajawalRegular`}
                  >
                    {para}
                  </p>
                </div>
              );
            })}
        </div>

        {/* image */}
        <div className=" mt-[0px] flex w-full overflow-hidden rounded-[6px]">
          <img
            src={mainImg}
            alt={title}
            className="h-[350px] w-full object-cover object-center  sm:h-[380px] lg:h-[425px]"
          />
        </div>
        {cards && (
          <div>
            <div className="hidden grid-cols-1  gap-[20px] lg:grid lg:grid-cols-2 lg:gap-[30px]">
              {cards?.map(
                (data: any, index: number) => {
                  return (
                    <ExpandingCard
                      data={data}
                      locale={locale}
                      isOpen={activeAccordion === data.id}
                      onClick={() =>
                        toggleAccordion(data.id)
                      }
                      key={index}
                    />
                  );
                },
              )}
            </div>
            <div className="lg:hidden flex flex-col gap-[40px]">
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  850: {
                    slidesPerView: 2,
                    spaceBetween: 10,
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
                  {cards?.map(
                    (data: any, index: any) => {
                      return (
                        <SwiperSlide className="!h-auto">
                          <ExpandingCard
                            data={data}
                            locale={locale}
                            isOpen={
                              activeAccordion === data.id
                            }
                            onClick={() =>
                              toggleAccordion(data.id)
                            }
                            key={index}
                          />
                        </SwiperSlide>
                      );
                    },
                  )}
                </div>
              </Swiper>
              <div className="flex custom-bullets justify-center"></div>
            </div>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

export default ExpandableCardsWithImg;
