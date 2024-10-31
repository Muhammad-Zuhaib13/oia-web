"use client";
import SimpleImgSlider from "@/app/components/sliders/SimpleImgSlider";
import { useState } from "react";

const DetailEconomicContent = ({
  data,
  isOpen,
  onClick,
  locale,
  className,
  titleClass=""
}: any) => {
  const { title, paras, list } = data || {};
  const [showMore, setShowMore] = useState(false);
  const handleRoute = (link: string) => {
    if (link) {
      window.open(link, "_blank", 'noopener,noreferrer');
    }
  };
  return (
    <div className={`${className} `}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-[24px]"
      >
        <span
          className={`subHeading rtl:font-TajawalBold text-left ${titleClass}`}
          // className={`grow text-start font-DINAMedium text-[24px] font-medium leading-[24px] text-[#5A4427] rtl:font-GESndBookMedium`}
        >
          {title}
        </span>
        
        <svg
          className="ml-8 shrink-0 accordIconAdd rtl:ml-0 rtl:mr-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden  transition-all duration-300 ease-in-out ${
          isOpen
            ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-[20px] lg:gap-[30px]">
            <div className={`${data?.sliderData ?'hidden':''} flex  flex-col gap-[20px] lg:gap-0  lg:flex-row justify-between`}>
              <div className="w-full lg:w-[45.4%]">
                {paras &&
                  paras?.map((para: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`${index !== paras?.length - 1 ? "mb-[16px] md:mb-[20px] lg:mb-[24px]" : ""}`}
                      >
                        <p
                          className={`paragraph rtl:font-TajawalRegular`}
                        >
                          {para}
                        </p>
                      </div>
                    );
                  })}
                {data?.paraImg && (
                  <div
                    key={data?.paraImg}
                    className="h-[45px] w-[160px] overflow-hidden "
                  >
                    <img
                      src={data?.paraImg}
                      alt="logo"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )}
              </div>
              <div className="max-h-[275px] min-h-[275px] w-full lg:w-[40.87%] overflow-hidden rounded-[6px]">
                {data?.image && (
                  <img
                    src={data?.image}
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
            </div>
            {data?.imgSlider && (
              <SimpleImgSlider
                style={'!mb-0'}
                locale={locale}
                data={data?.sliderData}
              />
            )}
            <div className="mb-[20px] lg:mb-[30px] flex flex-col gap-[20px] lg:flex-row lg:flex-wrap lg:gap-0 items-start justify-between ">
              {data?.list?.map(
                (value: any, index: number) => {
                  return (
                    <div
                      className={`${index % 2 === 0 ? "w-full lg:w-[45.4%]" : "w-full lg:w-[40.87%]"} `}
                    >
                      <div
                        className={`flex-col justify-center  border-l-[1px] border-solid border-col pl-[20px] transition-colors duration-500 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-[20px]`}
                      >
                        <div className="flex h-auto cursor-default flex-col justify-between ">
                          <h2 className="subHeading mb-[20px] !text-brown rtl:font-TajawalBold">
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
                                    <span
                                      className={`relative flex flex-row gap-[4px]  ${
                                        locale === "ar"
                                          ? "before:left-auto before:right-[-16px]"
                                          : "before:left-[-16px]"
                                      } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-[''] rtl:font-TajawalRegular `}
                                    >
                                      {item}
                                    </span>
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
                                        <li
                                          className={`${index !== paras?.subList - 1 ? "mb-[16px] md:mb-[20px] lg:mb-[24px]" : ""} flex justify-start ${value?.type !== "para" ? "pl-[20px]  rtl:pr-[20px]" : ""}`}
                                        >
                                          {value?.type ===
                                          "img" ? (
                                            <div
                                              key={
                                                value?.content
                                              }
                                              className="h-[45px]  overflow-hidden "
                                            >
                                              <img
                                                src={
                                                  value?.content
                                                }
                                                alt="logo"
                                                className="h-full w-full object-contain object-center"
                                              />
                                            </div>
                                          ) : (
                                            <span
                                              className={`relative flex flex-row
                                              ${
                                                locale ===
                                                "ar"
                                                  ? value?.type !==
                                                    "para"
                                                    ? "before:left-auto before:right-[-16px]"
                                                    : ""
                                                  : value?.type !==
                                                      "para"
                                                    ? "before:left-[-16px]"
                                                    : ""
                                              } paragraph ${
                                                value?.type !==
                                                "para"
                                                  ? "before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-['']"
                                                  : ""
                                              } rtl:font-TajawalRegular`}
                                            >
                                              <span className="paragraph !font-medium !text-dbrown rtl:font-TajawalBold">
                                                {
                                                  value?.heading
                                                }{" "}
                                              </span>
                                              <span
                                                className={`paragraph rtl:font-TajawalRegular`}
                                              ></span>
                                              {
                                                value?.content
                                              }
                                            </span>
                                          )}
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
                                  {!showMore
                                    ? `${locale === "en" ? "Read More" : "اقرأ المزيد"}`
                                    : `${locale === "en" ? "Read Less" : "اقرأ أقل"}`}
                                </button>
                              )}
                            </div>
                          )}

                          {value?.logos && (
                            <div className=" flex flex-wrap gap-[20px] lg:gap-[30px] ">
                              {value?.logos?.map(
                                (
                                  item: any,
                                  index: number,
                                ) => {
                                  return (
                                    <div
                                      key={index}
                                      className="h-[45px]  overflow-hidden cursor-pointer"
                                      onClick={()=>handleRoute(item?.link)}
                                    >
                                      <img
                                        src={item?.source}
                                        alt="logo"
                                        className="h-full object-contain object-center"
                                      />
                                    </div>
                                  );
                                },
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

export default DetailEconomicContent;
