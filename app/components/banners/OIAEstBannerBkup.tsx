"use client";
import { Divider, Image } from "antd";
import React from "react";
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
type OiaEstData = {
  sectionParaOne: string;
  videoSrcOne: string;
  imgSrcOne: string;
  numberParaOne: string;
  sectionParaTwo: string;
  videoSrcTwo: string;
  imgSrcTwo: string;
  numberParaTwo: string;
  currentLang: string;
};
type OiaEstProps = {
  data: OiaEstData;
};
const OIAEstBanner: React.FC<OiaEstProps> = ({ data }) => {
  const {
    sectionParaOne,
    videoSrcOne,
    imgSrcOne,
    numberParaOne,
    sectionParaTwo,
    videoSrcTwo,
    imgSrcTwo,
    numberParaTwo,
    currentLang,
  } = data;
  return (
    <section className="banner-section-two h-auto w-full ">
      <div className="banner-container-two bct-one relative mt-[50px]  h-[500px] w-full bg-[#ffffff] sm:mt-[40px] md:h-[311px] lg:mt-[50px] lg:h-[500px]">
        <div className="text-img-contianer-one lg:h-full">
          <ScreenContainer>
            <div className="text-img-wrapper">
              <div className="text-para w-full bg-[#ffffff]">
                <p className={`w-full max-w-full font-medium lg:text-[24px] ${setFontFamily(currentLang, "medium")}`}>
                  {sectionParaOne}
                </p>
              </div>
              {/* width 51.5%  */}
              <div className="text-video-img relative w-full overflow-hidden">
                <video autoPlay muted loop className="h-full w-full object-cover">
                  <source src={videoSrcOne} type="video/mp4"/>
                </video>
                <div className={`text-img-forw ${currentLang === "en" && "!left-[-2px] lg:left-0"}`}>
                  <Image
                    src={imgSrcOne}
                    alt="news1"
                    width={"100%"}
                    height={"100%"}
                    preview={false}
                  />
                </div>
                <p className={`absolute text-[14px]   ${currentLang === "en" ? "bottom-[32px] leading-[8px] lg:left-[32%]" : "bottom-[16px] left-[21%] leading-[16px] md:right-0 md:w-[123%]"} ${setFontFamily(currentLang, "medium")} left-[14%] font-medium text-[#000000] md:bottom-0  md:left-[14%] md:text-[20px] md:leading-[9.19px] lg:text-[24px] lg:leading-[32px] `}
                >
                  {numberParaOne}
                </p>
              </div>
            </div>
          </ScreenContainer>
        </div>
      </div>
    </section>
  );
};

export default OIAEstBanner;
