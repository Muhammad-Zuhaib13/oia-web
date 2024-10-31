"use client";
import { Image } from "antd";
import "swiper/css";
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
import { setFontFamily } from "../../data/data";
const PrivateEquitiesSlider = ({ data }: any) => {
  return (
    <div className="simple-slider-container sm:h-[114px] h-[70px]">
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
        {data?.map((item: any, index: number) => (
          <SwiperSlide
            virtualIndex={index}
            key={item.id}
            className={`w-full sm:max-w-[401px] max-w-[237px] ${index === 0 ? "sm:ml-[60px] ml-[20px]" : ""}  ${index === 0 && item?.locale ==="ar" && "sm:mr-[60px] mr-[20px]"} ${index === data?.sliderData?.length - 1 ? "sm:mr-[60px] mr-[20px]" : ""}`}
          >
            <div
              className="simple-card-one flex sm:h-[114px] h-[70px] w-full max-w-[401px] flex-row overflow-hidden"
              key={item?.id}
            >
                <div className="sm:w-[114px] w-[70px] h-full bg-[#FFFBF2] overflow-hidden flex flex-col items-center justify-center">
                    <img alt="equities" src={item?.image} className="object-contain sm:w-[60%] w-[60%] h-[60%] sm:h-[60%]" />
                </div>
                <div className="sm:w-full flex-1 h-full bg-[#D8B97A] flex flex-col sm:gap-[10px] gap-[4px] sm:px-[20px] sm:py-[19px] px-[12px] py-[11px]">
                    <h3 className={`line-clamp-1 ${setFontFamily(item?.locale || "en","bold")} sm:text-[20px] text-[14px] leading-[17px] font-bold sm:leading-[24px] text-white`}>{item?.title}</h3>
                    <p className={`sm:line-clamp-2 line-clamp-2 ${setFontFamily(item?.locale || "en","regular")} sm:text-[18px] text-[12px] leading-[14px] font-normal sm:leading-[21px] text-white`}>{item?.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PrivateEquitiesSlider;
