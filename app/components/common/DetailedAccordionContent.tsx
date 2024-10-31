"use client";
import { useState } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
const DetailedAccordionContent = ({
  data,
  isOpen,
  onClick,
  locale,
  className,
  isUseDarkBW=false
}: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { title, paras, list } = data || {};
  const [showMore, setShowMore] = useState(false);
  const isDark = useDarkMode() || false;
  return (

    <div className={`${className} `}>
      <button
        onClick={onClick}
        className="xs:gap-[16px] flex w-full items-center justify-between py-[24px]"
      >
        <span
          className={` subHeading rtl:font-TajawalBold ${isUseDarkBW && 'subHeadingFontClrBW'}`}
        >
          {title}
        </span>
        {isOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1356_2123)">
              <path
                d="M27 10H-7"
                stroke="#CCCCCC"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1356_2123">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3209_18)">
              <path
                d="M27 10.1523H-7"
                stroke="#CCCCCC"
                stroke-width="2"
              />
              <path
                d="M10 -6.84766L10 27.1523"
                stroke="#CCCCCC"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_3209_18">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0.152344)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
      <div
        className={`grid overflow-hidden  transition-all duration-300 ease-in-out  ${
          isOpen
            ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-[20px] lg:gap-[30px]">
            <div className=" flex  flex-col lg:flex-row justify-between gap-[20px] lg:gap-[30px]">
              <div className="w-full lg:w-[45.4%]">
                {paras &&
                  paras.map((para: any, index: number) => {
                    return (
                      <div key={index}>
                        <p
                          className={`paragraph rtl:font-TajawalRegular`}
                        >
                          {para}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <div className="w-full lg:w-[40.87%] rounded-[6px] overflow-hidden">
                {data?.image && (
                  <img
                    src={data?.image}
                    className="max-h-[200px] min-h-[200px] lg:max-h-[275px] lg:min-h-[275px] w-full  object-cover object-center"
                  />
                )}
              </div>
            </div>
            <h3 className="paragraph rtl:font-TajawalRegular">{data?.subTitle}</h3>
            <div className=" flex flex-col lg:flex-row lg:flex-wrap items-start justify-between gap-[20px] lg:gap-[30px] pb-[20px] lg:pb-[30px]">
              {data?.list?.map(
                (value: any, index: number) => {
                  return (
                    <div
                      className={`w-full ${index % 2 === 0 ? "lg:w-[45.4%]" : "lg:w-[40.87%]"} `}
                    >
                      <div
                        className={`flex-col justify-center  border-l-0 lg:border-l-2 border-solid ${isDark ? "border-[#FFFFFF]":"border-[#9E8557]"} pl-0.5 lg:pl-[20px] transition-colors duration-500 rtl:border-l-0 lg:rtl:border-r-2 rtl:pl-0 rtl:pr-0 lg:rtl:pr-[20px]`}
                      >
                        <div className="flex h-auto cursor-default flex-col justify-between ">
                          <h2 className="subHeading !text-brown   rtl:font-TajawalBold pb-[20px] lg:pb-[30px]">
                            {value?.title}
                          </h2>
                          {value?.para &&
                            value?.para?.map(
                              (
                                item: any,
                                index: number,
                              ) => {
                                return (
                                  <div key={index}>
                                    <p
                                      className={`paragraph rtl:font-TajawalRegular`}
                                    >
                                      {item}
                                    </p>
                                  </div>
                                );
                              },
                            )}
                          {value?.subList && (
                            <div>
                              <ul className="">
                                {value?.subList
                                  ?.slice(
                                    0,
                                    showMore
                                      ? value?.subList
                                          ?.length
                                      : 2,
                                  )
                                  ?.map(
                                    (
                                      value: any,
                                      index: number,
                                    ) => {
                                      return (
                                        <li className="mb-[20px] flex justify-start pl-[20px]  rtl:pr-[20px]">
                                          <span
                                            className={`relative    ${
                                              locale ===
                                              "ar"
                                                ? "before:left-auto before:right-[-16px]"
                                                : "before:left-[-16px]"
                                            } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-[''] rtl:font-TajawalRegular `}
                                          >
                                            <span className="paragraph !font-medium !text-dbrown rtl:font-TajawalBold ">
                                              {
                                                value?.heading
                                              }{" "}
                                            </span>
                                            <span
                                              className={`paragraph rtl:font-TajawalRegular`}
                                            ></span>
                                            {value?.content}
                                          </span>{" "}
                                        </li>
                                      );
                                    },
                                  )}
                              </ul>
                              {value?.subList?.length >=
                                3 && (
                                <button
                                  className={`paragraph !font-medium !text-brown rtl:font-TajawalRegular`}
                                  onClick={() =>
                                    setShowMore(!showMore)
                                  }
                                >
                                  {showMore
                                    ? "Read Less"
                                    : "Read More"}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DetailedAccordionContent;
