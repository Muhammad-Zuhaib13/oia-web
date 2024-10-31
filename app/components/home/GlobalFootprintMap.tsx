"use client";
import useDarkMode from "@/app/hooks/useDarkMode";
import { Divider } from "antd";
import React from "react";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";

type GlobalCounterData = {
  counterOne: {
    id: string;
    count: string;
    title: string;
  };
  counterTwo: {
    id: string;
    count: string;
    title: string;
  };
  counterThree: {
    id: string;
    count: string;
    title: string;
  };
};

type GlobalData = {
  title: string;
  para: string;
  northAm: string;
  southAm: string;
  africa: string;
  europe: string;
  asia: string;
  australia: string;
  currentLang: string;
  counter: GlobalCounterData;
};
type GlobalProps = {
  data: GlobalData;
};
const GlobalFootprintMap: React.FC<any> = ({ data }) => {
  const {
    title,
    para,
    currentLang,
    counter,
    northAm,
    southAm,
    africa,
    europe,
    asia,
    australia,
    oman
  } = data;
  const globalData = {
    title: title,
    titleAlign: currentLang === "en" ? "left" : "right",
    para: para,
    locale: currentLang,
  };
  const continentData = {
    northAm: northAm,
    southAm: southAm,
    africa: africa,
    europe: europe,
    asia: asia,
    australia: australia,
    oman:oman,
  };
  const counterData = [
    {
      id: counter?.counterOne?.id,
      count: counter?.counterOne?.count,
      title: counter?.counterOne?.title,
    },
    {
      id: counter?.counterTwo?.id,
      count: counter?.counterTwo?.count,
      title: counter?.counterTwo?.title,
    },
    {
      id: counter?.counterThree?.id,
      count: counter?.counterThree?.count,
      title: counter?.counterThree?.title,
    },
  ];
  const isDark = useDarkMode() || false;
  return (
    <div className="map-bg py-[40px] sm:pb-[50px] sm:pt-[58px] xl:pb-[66px] xl:pt-[70px]">
      <SimpleHeadingandText
        data={globalData}
      ></SimpleHeadingandText>
      <div className="global-map-container relative  z-10 mt-[62px] w-full px-[20px] lg:mt-[88px] lg:px-[34.5px]">
        <img
          src={
            isDark
              ? "/assets/images/global-map-b.svg"
              : "/assets/images/global-map.svg"
          }
          alt="global map"
          className="global-map-img h-full w-full object-contain"
        />
        {/* north america */}
        <div className="absolute left-[17%] top-[42%]">
          <div className="dot-container">
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link> */}
            <span className="dot"></span>
            <div
              className={`absolute  left-0 top-[15px] flex flex-row items-end xl:left-[4px] xl:top-[30px] rtl:flex-row-reverse`}
            >
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                  marginTop: "12px",
                }}
                className="north-america global-map-d-line h-[60px] md:h-[70px] lg:h-[117px]"
              />
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px] lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.northAm}
              </p>
            </div>
          </div>
        </div>
        {/* south america */}
        <div className="absolute left-[34%] top-[49%]">
          <div className="dot-container">
            <div
              className={`absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px]  rtl:flex-row-reverse`}
            >
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                }}
                className="south-america global-map-d-line h-[62px] md:h-[82px] lg:h-[117px]"
              />
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.southAm}
              </p>
            </div>
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link>{" "} */}
            <span className="dot"></span>
          </div>
        </div>
        {/* africa */}
        <div className="absolute left-[51%] top-[44%]">
          <div className="dot-container">
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link> */}
            <span className="dot"></span>
            <div
              className={`absolute right-0 top-[15px] flex flex-row items-end xl:right-[4px] xl:top-[30px] rtl:flex-row-reverse `}
            >
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.africa}
              </p>
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                  marginTop: "12px",
                }}
                className="africa global-map-d-line h-[56px] md:h-[80px] lg:h-[117px]"
              />
            </div>
          </div>
        </div>
        {/* oman */}
        <div className="absolute md:left-[59.4%] md:top-[33%] left-[58%] top-[39%]">
          <div className="dot-container">
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link> */}
            <span className="dot dot-oman"></span>
            <div
              className={`absolute right-0 top-[15px] flex flex-row items-end xl:right-[4px] xl:top-[30px] rtl:flex-row-reverse `}
            >
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.oman}
              </p>
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                  marginTop: "12px",
                }}
                className="africa global-map-d-line h-[56px] md:h-[80px] lg:h-[135px]"
              />
            </div>
          </div>
        </div>
        {/* europe */}
        <div className="europe-top-space absolute left-[46.7%] top-[18%]">
          <div className="dot-container">
            <div
              className={`rlt:flex-row-reverse absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px]`}
            >
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                }}
                className="europe global-map-d-line h-[62px] md:h-[82px] lg:h-[117px]"
              />
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.europe}
              </p>
            </div>
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link>{" "} */}
            <span className="dot"></span>
          </div>
        </div>
        {/* asia */}
        <div className="asia-top-space absolute left-[66.5%] top-[28%]">
          <div className="dot-container">
            <div
              className={`absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px] rtl:flex-row-reverse`}
            >
              <Divider
                type="vertical"
                style={{
                  color: isDark ? "#FFFFFF" : "#594226",
                  backgroundColor: isDark
                    ? "#FFFFFF"
                    : "#594226",
                }}
                className="asia global-map-d-line h-[75px] md:h-[105px] lg:h-[162px]"
              />
              <p
                className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
              >
                {continentData?.asia}
              </p>
            </div>
            {/* <Link href={"/about"}>
              <span className="dot"></span>
            </Link>{" "} */}
            <span className="dot"></span>
          </div>
        </div>
        {/* australia */}
        <div className="australia-top-space absolute left-[75%] top-[76%] lg:left-[74%] lg:top-[76%] xl:left-[75.5%] xl:top-[80%]">
          <div className="dot-container">
            <div className="flex">
              <div
                className={`absolute left-[20px] top-[8px] flex flex-row flex-col items-end gap-[6px] lg:left-[30px] xl:top-[12px] rtl:flex-row-reverse `}
              >
                <Divider
                  style={{
                    color: isDark ? "#FFFFFF" : "#594226",
                    backgroundColor: isDark
                      ? "#FFFFFF"
                      : "#594226",
                    height: "1px",
                    margin: "0px",
                    padding: "0px",
                  }}
                  className="australia global-map-d-line w-[86px] md:w-[96px] lg:w-[125px]"
                />
                <p
                  className={`global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold`}
                >
                  {continentData?.australia}
                </p>
              </div>
              {/* <Link href={"/about"}>
                <span className="dot"></span>
              </Link>{" "} */}
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
      {/* count section */}
      <div
        className={`counter-global-map-container mt-[32px] flex justify-center gap-[30px] sm:gap-[80px] lg:mt-[-30px] lg:gap-0  ${currentLang === "en" ? "flex-row" : "flex-row-reverse"}`}
      >
        {counterData?.map((value, index) => {
          return (
            <div
              key={index}
              className="flex w-fit flex-col items-center gap-[8px] sm:gap-[16px] lg:w-full  lg:max-w-[220px] xl:gap-[20px]"
            >
              <p className="globalIndicators font-poppinsSemiBold rtl:font-TajawalBold">
                {value?.count}
              </p>
              <p
                className={`paragrapghLg font-bold rtl:font-TajawalBold`}
              >
                {value?.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalFootprintMap;
