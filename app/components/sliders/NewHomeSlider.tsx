"use client";
import useDarkMode from "@/app/hooks/useDarkMode";
import { Link } from "@/i18n.config";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
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
const NewHomeSlider: React.FC<any> = ({ data }) => {
  const isDark = useDarkMode();

  return (
    <section className="simple-slider py-[40px] sm:py-[50px] lg:pb-[88px] lg:pt-[94px]">
      <div className="simple-slider-container  flex flex-col gap-[20px] sm:gap-[50px]">
        <ScreenContainer>
          <div className="flex w-full max-w-[988px] flex-col gap-[6px] md:gap-[33px] lg:gap-[24px]">
            <h2
              className={`mainHeading  rtl:font-TajawalBold`}
            >
              {data?.title}
            </h2>
            <p
              className={`paragraph rtl:font-TajawalRegular`}
            >
              {data?.para}
            </p>
          </div>
        </ScreenContainer>
        <div className="relative flex w-full flex-col gap-[12px] sm:gap-[18px] lg:gap-[80px]">
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
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              pagination={{
                clickable: true,
                el: ".custom-bullets", // Custom bullet container
                renderBullet: function (index, className) {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              className="swiper-slider-common flex w-full flex-col"
              loop={true}
            >
              {data?.sliderData?.map(
                (item: any, index: number) => (
                  <SwiperSlide
                    virtualIndex={index}
                    key={item?.id}
                    className="!w-auto ltr:mr-[12px] ltr:md:!mr-[24px] rtl:!ml-[12px] rtl:md:!ml-[24px]"
                  >
                    {/* <Link href={item?.link}> */}
                    <div className="relative flex h-auto  w-full max-w-[170px] flex-col gap-[5px] sm:max-w-[250px] md:max-w-[297px]">
                      <div className="h-[170px] w-full overflow-hidden rounded-[4px] sm:h-[250px] lg:h-[240px]">
                        <img
                          src={item?.src}
                          alt={item?.alt}
                          className="h-full w-full rounded-[4px] object-cover "
                        />
                        <div className="absolute left-0 top-0 flex w-full h-full flex-col justify-end rounded-[4px] p-[13px]" style={{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #5A4427 100%)"}}>
                          <div className="g:gap-[18px] flex flex-col gap-[10px] sm:gap-[16px]">
                            <p className="profileCard rtl:font-TajawalBold">{item?.title}</p>
                            <p className="profileRole rtl:font-TajawalRegular">
                              {item?.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="cardBgBottom flex w-full items-center justify-between rounded-[4px] px-[13px] py-[12px]">
                          <h4 className="homeCardTitle line-clamp-1 capitalize  rtl:font-TajawalMedium rtl:font-medium">
                            {item?.title}
                          </h4>
                          <span className="rtl:rotate-180">
                            <img
                              src={
                                isDark
                                  ? "/assets/icons/arrow-sq-b.svg"
                                  : "/assets/icons/arrow-sq.svg"
                              }
                              alt="link"
                            />
                          </span>
                        </div> */}
                    </div>
                    {/* </Link> */}
                  </SwiperSlide>
                ),
              )}
              <div className="custom-bullets mt-[18px] flex justify-center lg:mt-[50px] lg:!hidden"></div>
            </Swiper>
          </ScreenContainer>
          <ScreenContainer>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[24px]">
              {data?.investmentsLink?.map(
                (item: any, index: number) => (
                  <Link
                    href={item?.link}
                    className="block w-full "
                  >
                    <div className="cardBgBottom flex w-full  items-center justify-between rounded-[4px] px-[13px] py-[12px] ">
                      <h4 className="homeCardTitle line-clamp-1 capitalize  rtl:font-TajawalMedium rtl:font-medium">
                        {item?.title}
                      </h4>
                      <span className="rtl:rotate-180">
                        <img
                          src={
                            isDark
                              ? "/assets/icons/arrow-sq-b.svg"
                              : "/assets/icons/arrow-sq.svg"
                          }
                          alt="link"
                        />
                      </span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </ScreenContainer>
        </div>
      </div>
    </section>
  );
};

export default NewHomeSlider;
