"use client";
import { useState } from "react";

const Accordion = ({
  data,
  isOpen,
  onClick,
  locale,
  className,
}: any) => {
  const { title, paras, list } = data || {};
  return (
    <div className={`${className} `}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between  py-[12px] sm:py-[20px] lg:py-[24px]"
      >
        <span
          className={`subHeading !font-medium rtl:font-TajawalBold`}
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
        <div className="overflow-hidden ">
          <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] pb-[12px] sm:pb-[20px] lg:pb-[24px]">
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
            {list && (
              <ul className="flex flex-col  gap-[16px] sm:gap-[20px] lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px]">
                {list.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="flex flex-row items-baseline gap-[12px]"
                  >
                    <span
                      className={`relative flex flex-row gap-[4px] bullets-col  ${
                        locale === "ar"
                          ? "before:left-auto before:right-[-16px]"
                          : "before:left-[-16px]"
                      } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular `}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
