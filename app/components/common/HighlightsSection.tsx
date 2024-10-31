"use client";

import ScreenContainer from "../screencontainer/ScreenContainer";

const HighLightsSection = ({
  data,
  locale,
  classNameContainer = "",
}: any) => {
  // destructuring the data object
  const {
    titleMain = "",
    mainImg = "",
    firstTitle = "",
    firstDesc = "",
    secondTitle = "",
    secondDesc = "",
    secondList = [],
    thirdTitle = "",
    thirdList = [],
  } = data || {};

  return (
    <ScreenContainer>
      <div
        className={`flex flex-col gap-[20px] lg:gap-[30px] ${classNameContainer} `}
      >
        {/* title */}
        <div className="flex">
          <h2 className="mainHeading rtl:font-TajawalBold">
            {titleMain}
          </h2>
        </div>

        {/* image */}
        <div className=" flex h-[425px] w-full shrink-0 grow rounded-[6px] ">
          <img
            className={`h-full w-full flex-col rounded-[6px] object-cover`}
            src={mainImg}
            alt="tab img"
          />
        </div>

        {/* details & lists */}
        <div className="flex flex-row gap-[24px]">
          {/* First Section */}
          <div className="flex w-full max-w-[404px] flex-col gap-[20px]">
            <h3 className="subHeading !text-brown rtl:font-TajawalBold">
              {firstTitle}
            </h3>
            <p className="paragraph rtl:font-TajawalRegular">
              {firstDesc}
            </p>
          </div>

          {/* Second Section with List */}
          <div className="flex w-full max-w-[404px] flex-col gap-[20px]">
            <h3 className="subHeading !text-brown rtl:font-TajawalBold">
              {secondTitle}
            </h3>
            {
              <ul className="disc-br flex flex-col  gap-[15px] pl-[20px] rtl:pr-[20px]">
                {secondList.map(
                  (item: any, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row items-baseline gap-[12px]"
                    >
                      <span
                        className={`relative flex flex-row gap-[4px]  ${
                          locale === "ar"
                            ? "before:left-auto before:right-[-16px]"
                            : "before:left-[-16px]"
                        } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:bg-[#9F8555] before:content-[''] rtl:font-TajawalRegular `}
                      >
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            }
          </div>

          {/* Third Section with List */}
          <div className="flex w-full max-w-[404px] flex-col gap-[20px]">
            <h3 className="subHeading !text-brown rtl:font-TajawalBold">
              {thirdTitle}
            </h3>
            {
              <ul className="disc-br flex flex-col gap-[15px] pl-[20px] rtl:pr-[20px]">
                {thirdList.map(
                  (item: any, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row items-baseline gap-[12px]"
                    >
                      <span
                        className={`relative flex flex-row gap-[4px]  ${
                          locale === "ar"
                            ? "before:left-auto before:right-[-16px]"
                            : "before:left-[-16px]"
                        } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:bg-[#9F8555] before:content-[''] rtl:font-TajawalRegular `}
                      >
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            }
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default HighLightsSection;
