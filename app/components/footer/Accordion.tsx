"use client";
import { useState, useId } from "react";

const Accordion = ({
  title,
  answer,
  children,
  ansBtnCls = "sm:py-[20px] py-[12px]",
}: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const clipId = useId();
  return (
    <div className="tcvi-wrapper border-b-[1px] border-b-[#FFFFFF26]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex w-full items-center justify-between ${accordionOpen ? `${ansBtnCls} open` : `sm:py-[20px] py-[12px]`}`}
      >
        <span
          className={`font-DINABold font-bold capitalize text-[#ffffff]  rtl:font-TajawalBold footerLabel`}
        >
          {title}
        </span>
        <span className="flex h-[30px] w-[30px] flex-col items-center justify-center rounded-full bg-[#D8B97A] md:h-[40px] md:w-[40px] sm:h-[24px] sm:w-[24px]">
          {accordionOpen ? (
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4.5H8" stroke="white" />
            </svg>
          ) : (
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path={`url(#${clipId})`}>
                <path d="M0 4.5H8" stroke="white" />
                <path d="M4 0.5L4 8.5" stroke="white" />
              </g>
              <defs>
                <clipPath id={clipId}>
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(0 0.75)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
      </button>
      <div
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "mt-[30] grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div
          className={`overflow-hidden ${accordionOpen ? "mb-[20px] sm:mb-[30px]" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
