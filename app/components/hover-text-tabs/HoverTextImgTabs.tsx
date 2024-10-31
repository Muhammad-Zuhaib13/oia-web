"use client";
import { useState } from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const HoverTextImgTabs = ({ data, locale }: any) => {
  const [currentTab, setCurrentTab] = useState(
    data.cards[0]?.id || 1,
  );
  const [currentImg, setCurrentImg] = useState(
    data.cards[0]?.img,
  );
const isDark = useDarkMode();
  return (
    <div className="py-[60px] lg:py-[100px] ">
      <div className="block">
        <ScreenContainer>
          <div className="flex flex-col items-start justify-between gap-[30px] lg:flex-row lg:gap-[70px]">
            {/* Left side: Text section */}
            <div className="block lg:hidden">
              {data?.title && (
                <h2 className="mainHeading rtl:font-TajawalBold">
                  {data?.title}
                </h2>
              )}
            </div>
            <div className="order-2 flex h-full w-full grow flex-col gap-[30px] lg:order-1">
              <div className="hidden lg:block">
                {data?.title && (
                  <h2 className="mainHeading rtl:font-TajawalBold">
                    {data?.title}
                  </h2>
                )}
              </div>
              {data?.cards && (
                <div className="flex flex-col gap-[20px] lg:gap-[30px]">
                  {data?.cards?.map(
                    (value: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`flex-col justify-center border-0 border-solid border-lightGrey transition-colors duration-500
                        ${index !== data?.cards?.length - 1 ? "border-b-[2px] pb-[20px]" : ""} 
                        pl-0 lg:border-b-0 lg:border-l-2 border-col
                        lg:pl-[20px] rtl:border-0 rtl:border-b-[2px]
                        rtl:border-l-0 rtl:pl-0 rtl:pr-0
                        lg:rtl:border-r-2 rtl:lg:border-b-0 lg:rtl:pr-[20px]`}
                        >
                          <div className="flex h-auto cursor-default flex-col justify-between gap-[20px] ">
                            {value?.title && (
                              <h2 className="subHeading !text-dbrown rtl:font-TajawalBold ">
                                {value?.title}
                              </h2>
                            )}
                            {value?.description && (
                              <p
                                className={`paragraph rtl:font-TajawalRegular`}
                              >
                                {value?.description}
                              </p>
                            )}
                            {value?.list && (
                              <ul className="disc-br flex flex-col gap-[15px] ltr:pl-[20px] rtl:pr-[20px]">
                                {value?.list.map(
                                  (
                                    item: any,
                                    index: number,
                                  ) => (
                                    <li
                                      key={index}
                                      className="flex flex-row items-baseline gap-[12px]"
                                    >
                                      <span
                                        className={`rtl:font-TajawalRegular relative flex flex-row gap-[4px] font-DINARegular text-[14px] font-normal leading-[20px] text-[#202020] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:bg-[#000000] before:content-[''] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[26px]`}
                                      >
                                        <span className="rtl:font-GESndBookBold font-DINABold font-bold">
                                          {item?.title}
                                        </span>
                                        <span>
                                          {item?.desc}
                                        </span>
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              )}
            </div>
            {/* Right side: Image section */}
            {currentImg && (
              <div className="order-1 flex h-[200px] sm:h-[380px] lg:h-[425px] w-full shrink-0 grow rounded-[6px] lg:order-2 lg:max-w-[511px]">
                <img
                  className={`h-full w-full flex-col rounded-[6px] object-cover`}
                  src={`/assets/images/values.jpg`}
                  alt="tab img"
                />
              </div>
            )}
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default HoverTextImgTabs;
