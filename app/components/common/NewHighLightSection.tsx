"use client";

import ScreenContainer from "../screencontainer/ScreenContainer";

const HighLightsSection = ({
  data,
  locale,
  classNameContainer = "",
  isUseChangeClrDark = false,
  swap=false
}: any) => {
  const {
    title = "",
    subTitle = "",
    paras = [],
    cards = [],
    mainImg = "",
    secondTitle = "",
  } = data || {};
  return (
    <ScreenContainer>
      <div
        className={`flex flex-col gap-[20px] md:gap-[30px] ${classNameContainer}`}
      >
        {/* title */}
        <div className={`flex flex-col  ${(subTitle || paras) ? 'gap-[20px] lg:gap-[30px]':''}`}>
          <h2
            className={`mainHeading  rtl:font-TajawalBold`}
          >
            {title}
            <span className={`subHeading  ${isUseChangeClrDark && "subHeadingFontClrBW"} !text-brown rtl:font-TajawalBold`}>
              {subTitle}
            </span>
          </h2>
          {/* secondTitle */}
          {secondTitle && (
            <h3 className={`subHeading   ${isUseChangeClrDark && "subHeadingFontClrBW"} rtl:font-TajawalBold pt-[20px] lg:pt-[30px]`}>
              {secondTitle}
            </h3>
          )}
           <div className={` flex sm:h-[360px] h-[200px] lg:h-[425px] w-full shrink-0 grow rounded-[6px] ${swap?'block':'hidden'} lg:hidden`}>
          <img
            className={`h-full w-full flex-col rounded-[6px] object-cover`}
            src={mainImg}
            alt="tab img"
          />
        </div>
          {paras && (
            <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
              {paras?.map((para: any, index: number) => (
                <div key={index} className="last:mb-0">
                  <p className="paragraph rtl:font-TajawalRegular">
                    {para}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* image */}
        
        <div className={` flex sm:h-[360px] h-[200px] lg:h-[425px] w-full shrink-0 grow rounded-[6px] ${swap?'hidden':'block'} lg:block`}>
          <img
            className={`h-full w-full flex-col rounded-[6px] object-cover`}
            src={mainImg}
            alt="tab img"
          />
        </div>

        <div className="flex flex-col gap-[20px] lg:flex-row  lg:gap-[30px]">
          {cards &&
            cards?.map((value: any, index: number) => {
              return (
                <div
                  className={`flex w-full  flex-col gap-[12px] md:gap-[30px] lg:max-w-[404px]  lg:border-b-0  ${index !== data?.cards?.length - 1 ? "border-b-[2px] pb-[20px] lg:pb-[30px] " : ""} `}
                  key={index}
                >
                  <h3 className={`subHeading ${isUseChangeClrDark && "subHeadingFontClrBW"} rtl:font-TajawalBold`}>
                    {value?.cardTitle}
                  </h3>
                  <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                    {value?.cardParas &&
                      value?.cardParas?.map(
                        (para: any, index: number) => {
                          return (
                            <p
                              className={`paragraph rtl:font-TajawalRegular`}
                            >
                              {para}
                            </p>
                          );
                        },
                      )}
                    {value?.list && (
                      <ul className="flex flex-col  gap-[16px] sm:gap-[20px] lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px]">
                        {value?.list?.map(
                          (item: any, index: number) => (
                            <li
                              key={index}
                              className="flex flex-row items-baseline  "
                            >
                              <span
                                className={`relative flex flex-row gap-[4px]  ${
                                  locale === "ar"
                                    ? "before:left-auto before:right-[-16px]"
                                    : "before:left-[-16px]"
                                } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-[''] rtl:font-TajawalRegular `}
                              >
                                {item}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default HighLightsSection;
