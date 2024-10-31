"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import { Link } from "@/i18n.config";

const HomeBanner: React.FC<any> = ({ data, locale }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="homeSlider"
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex h-full w-full items-center">
              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute left-0 top-0 z-[0] h-full w-full object-cover"
                >
                  <source
                    src={item.source}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={item.source}
                  alt={item.title}
                  className="absolute left-0 top-0 z-[0] h-full w-full object-cover"
                />
              )}

              <ScreenContainer>
                <div className="relative z-[1] w-[100%] lg:w-[60%]">
                  <h1 className="heroHeading mb-[50px] text-white rtl:font-TajawalBold">
                    <span className="block">
                      {item.title}
                    </span>
                    {item.subTitle && (
                      <span>{item.subTitle}</span>
                    )}
                  </h1>
                  {item?.btnLabel && (
                  <Link href={item?.link}>
                    <span className="cta flex items-center rounded-[4px] bg-white px-[20px] py-[15px] rtl:font-TajawalMedium font-medium w-fit" >
                      {item.btnLabel}
                      <span
                        className={
                          locale === "ar"
                            ? "mr-[40px]"
                            : "ml-[40px]"
                        }
                      >
                        <img
                          src="/assets/images/download.svg"
                          alt="download"
                        />
                      </span>
                    </span>
                  </Link>
                  )}
                </div>
              </ScreenContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeBanner;
