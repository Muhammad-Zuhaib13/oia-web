"use client";
import React from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
const ExpandingCard: React.FC<any> = ({
  data,
  isOpen,
  onClick,
  locale,
}) => {
  const { imgSrc, details, cta } = data;
  const isDark = useDarkMode();
  return (
    <div className="flex md:min-h-[270px] min-h-[292px] h-full  w-full flex-col border-[1px]  border-[#CCCCCC] p-[20px] lg:max-w-[620px] rounded-[6px] bg-theme-switch ">
      {/* Image Section */}
      {imgSrc && (
        <div className="flex max-h-[62px] w-full flex-col justify-start">
          <img
            src={imgSrc}
            alt={details?.[0]?.title || "Card Image"}
            className="h-full w-fit rounded-[6px] object-contain"
          />
        </div>
      )}

      {/* Details Section */}
      {details && (
        <div
          className={` relative transform transition duration-200 ease-out before:absolute before:bottom-0 before:left-0 before:h-[50%]  before:bg-gradient-to-t before:from-white before:to-transparent before:content-[''] ${isOpen ? "auto before:h-0 before:w-0" : "h-[150px] overflow-hidden before:w-full "} flex-col `}
        >
          {details?.map((detail: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col `}
            >
              {/* Title */}
              {detail?.title && (
                <h3 className={`subHeading  rtl:font-TajawalBold ${(!detail.list || !detail.paras) ? 'pt-[20px] lg:pt-[30px]':'pt-[20px] lg:pt-[30px]'} `}>
                  {detail.title}
                </h3>
              )}

              {/* Paragraphs */}
              {detail.paras && (
                <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] pt-[20px] lg:pt-[30px] ">
                  {detail.paras.map(
                    (para: any, idx: number) => (
                      <div key={idx}>
                        <p
                          className={`paragraph !text-[#000000] rtl:font-TajawalRegular`}
                        >
                          {para}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              )}

              {/* List Section */}
              {detail.list && (
                <ul className="flex list-disc flex-col  gap-[16px] pl-[20px] !text-[#202020] sm:gap-[20px] lg:gap-[24px] pt-[20px] lg:pt-[30px]">
                  {detail.list.map(
                    (item: any, idx: number) => (
                      <li
                        key={index}
                        className={`flex flex-row items-baseline gap-[12px] ${locale === "ar" ? "pr-[12px]" : ""}`}
                      >
                        <span
                          className={`relative flex flex-row gap-[4px]  ${
                            locale === "ar"
                              ? "before:left-auto before:right-[-16px]"
                              : "before:left-[-16px]"
                          } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full ${isDark ? "before:bg-[#202020]":"before:bg-[#9F8555]"} before:content-[''] rtl:font-TajawalRegular !text-[#202020] `}
                        >
                          {item}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Read More Button */}
      {details && cta && (
        <div className="relative z-20 pt-[20px] lg:pt-[30px] ">
          <button
            className={`paragraph expBtn !font-medium  rtl:font-TajawalRegular`}
            onClick={onClick}
          >
            {isOpen
              ? `${cta?.labelShowLess}`
              : `${cta?.labelRead}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandingCard;
