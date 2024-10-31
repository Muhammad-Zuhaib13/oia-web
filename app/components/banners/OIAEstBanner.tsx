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
    <section className="my-[100px]">
      <ScreenContainer>
        <div className="w-[49.25%] mb-[20px]">
          <p className={`w-full max-w-full font-medium lg:text-[24px] ${setFontFamily(currentLang, "medium")}`}>
            {sectionParaOne}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[32.7%]">
              <div className="relative overflow-hidden h-full min-h-[230px] max-h-[230px]">
                <video autoPlay muted loop className="h-full w-[99%] m-auto">
                  <source src={videoSrcOne} type="video/mp4"/>
                </video>
                <img src={imgSrcOne} alt="news1" className="absolute top-0 object-fill w-full h-full"/>
              </div>
              <p className={`border-22 border-red-900 text-[14px] ${setFontFamily(currentLang, "medium")} font-medium !text-[#000000] lg:text-[24px] lg:leading-[32px] `}>
                Assets Size
                {/* {numberParaOne} */}
              </p>
          </div>
          <div className="w-[27%]">
              <div className="relative overflow-hidden h-full min-h-[230px] max-h-[230px]">
                <video autoPlay muted loop className="h-full w-[99%] m-auto">
                  <source src={videoSrcOne} type="video/mp4"/>
                </video>
                <img src="assets/images/fifty-plus.png" alt="news1" className="absolute top-0 object-fill w-full h-full"/>
              </div>
              <p className={`border-22 border-red-900 text-[14px] ${setFontFamily(currentLang, "medium")} font-medium !text-[#000000] lg:text-[24px] lg:leading-[32px] `}>
                Investments in more than 45 countries
                {/* {numberParaOne} */}
              </p>
          </div>
          <div className="w-[25%]">
              <div className="relative overflow-hidden h-full min-h-[230px] max-h-[230px]">
                <video autoPlay muted loop className="h-full w-[99%] m-auto">
                  <source src={videoSrcOne} type="video/mp4"/>
                </video>
                <img src="assets/images/avg-returns.png" alt="news1" className="absolute top-0 object-fill w-full h-full"/>
              </div>
              <p className={`border-22 border-red-900 text-[14px] ${setFontFamily(currentLang, "medium")} font-medium !text-[#000000] lg:text-[24px] lg:leading-[32px] `}>
                Average Returns
                  {/* {numberParaOne} */}
              </p>
          </div>
        </div>
      </ScreenContainer>
      
    </section>
  );
};

export default OIAEstBanner;
