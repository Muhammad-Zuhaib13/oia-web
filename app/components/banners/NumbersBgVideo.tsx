"use client";
import ScreenContainer from "../screencontainer/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const NumbersBgVideo = ({ data, locale }: any) => {
  console.log("data is", data?.videoSrcOne);
  const isDarkMode = useDarkMode();
  console.log("The current mode is dark? ", isDarkMode)
  return (
    <section className="number-video-container py-[40px] sm:py-[60px] lg:py-[100px] h-auto w-full">
      <ScreenContainer>
        <div className="flex h-auto w-full flex-col lg:gap-[64px] sm:gap-[50px] gap-[30px]">
          <div className="">
            <h2 className="mainHeading  rtl:font-TajawalBold">
              {locale ==="en" ? "Key Indicators":"المؤشرات الرئيسية"}
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <div className="grid w-[101%] grid-cols-2  gap-[20px] sm:gap-x-[20px] sm:gap-y-[79px] lg:grid-cols-4 lg:gap-0">
              <div className="flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]">
                <div className="sm:w-[70%] w-[90%]">
                  <h4 className="homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium">
                    {locale ==="en" ? "Asset Size":"حجم أصول الجهاز حتى نهاية 2023م"}
                  </h4>
                </div>
                <div className="text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mr-auto rtl:ml-auto">
                  <div className="tvc-video">
                    <video
                      autoPlay
                      muted
                      loop
                      className="m-auto h-full w-[98%] object-cover py-[2px]"
                    >
                      <source
                        src={data?.videoSrcOne}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className={`tvc-text ${!isDarkMode ? "tvc-text-light":"tvc-text-dark"} flex flex-row`}>
                    <h2 className="tvc-text-row justify-start flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse rtl:justify-end lg:px-[2px] px-[4px]">
                      <span className="font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]">
                        19.2
                      </span>
                      <span className="flex flex-col justify-around font-DINABold rtl:font-TajawalBold  text-[8px] leading-normal leading-bold sm:text-[14px] sm:leading-[14px] md:text-[20px] md:leading-[20px] rtl:text-left">
                        <span>{locale ==="en" ? "Bn.":" مليار "}</span>
                        <span>{locale ==="en" ? "OMR":" ريال عماني"}</span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]">
                <div className="lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]">
                  <h4 className="homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium">
                    {locale ==="en" ? "Average Returns":"العائد على الاستثمار خلال 2023م"}
                  </h4>
                </div>
                <div className="text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative md:mx-auto rtl:mr-0 mr-auto">
                  <div className="tvc-video">
                    <video
                      autoPlay
                      muted
                      loop
                      className="m-auto h-full w-[98%] object-cover py-[2px]"
                    >
                      <source
                        src={data?.videoSrcOne}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className={`tvc-text ${!isDarkMode ? "tvc-text-light":"tvc-text-dark"} flex flex-row`}>
                    <h2 className="tvc-text-row lg:justify-center justify-start rtl:lg:justify-center rtl:justify-end flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse lg:px-[2px] px-[4px]">
                    <span className="font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]">
                        9.95
                      </span>
                      <span className="mt-[10px] flex flex-col justify-start font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px]">
                        <span>%</span>
                        <span></span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden  ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]">
                <div className="lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]">
                  <h4 className="homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium">
                  {locale === "en"
                      ? "Investments in more than 50 countries"
                      : "تتوزع استثمارات جهاز الاستثمار العماني وأصوله جغرافيًا على أكثر من 50 دولة حول العالم - حتى نهاية 3202م."}
                  </h4>
                </div>
                <div className="text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mx-auto">
                  <div className="tvc-video">
                    <video
                      autoPlay
                      muted
                      loop
                      className="m-auto h-full w-[98%] object-cover py-[2px]"
                    >
                      <source
                        src={data?.videoSrcOne}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className={`tvc-text ${!isDarkMode ? "tvc-text-light":"tvc-text-dark"} flex flex-row`}>
                    <h2 className="tvc-text-row lg:justify-center justify-start flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse rtl:lg:justify-center rtl:justify-end lg:px-[2px] px-[4px]">
                    <span className="font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]">
                        50
                      </span>
                      <span className="flex flex-col justify-start mt-[10px] font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px]">
                        <span>+</span>
                        <span></span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]">
                <div className="lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]">
                  <h4 className="homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium">
                  {locale ==="en" ? "Contribution to GDP in 2022":"المساهمة في الناتج المحلي في 2022م"}
                  </h4>
                </div>
                <div className="text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mx-auto">
                  <div className="tvc-video">
                    <video
                      autoPlay
                      muted
                      loop
                      className="m-auto h-full w-[98%] object-cover py-[2px]"
                    >
                      <source
                        src={data?.videoSrcOne}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className={`tvc-text ${!isDarkMode ? "tvc-text-light":"tvc-text-dark"} flex flex-row`}>
                    <h2 className="tvc-text-row lg:justify-center rtl:lg:justify-center justify-start rtl:justify-end flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse lg:px-[2px] px-[4px]">
                    <span className="font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]">
                        2.6
                      </span>
                      <span className="flex flex-col justify-around font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px] rtl:text-left ">
                      <span>{locale ==="en" ? "Bn.":" مليار "}</span>
                      <span>{locale ==="en" ? "OMR":" ريال عماني"}</span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default NumbersBgVideo;
