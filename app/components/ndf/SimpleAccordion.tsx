"use client";
import { useState } from "react";
import { setFontFamily } from "../../data/data";

const SimpleAccordion = ({ data }: any) => {
  const [selected, setSelected] = useState<number | null>(
    null,
  );
  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="accordion-container">
      {data?.cards?.map((value: any, index: number) => {
        const isLastItem = index === data.cards.length - 1;
        return (
          <div
            className={`accordion-item flex h-auto w-full flex-col  border-t-[1px]  ${isLastItem ? "border-b-[1px]" : ""} border-[#C2C2C2]`}
            key={index}
          >
            <div
              className={`accordion-title flex flex-row justify-between py-[20px] sm:py-[23px]`}
              onClick={() => toggle(index)}
            >
              <div
                className={`${selected === index ? "flex flex-col gap-[13px]" : "hidden"}`}
              >
                <h4 className="font-poppinsSemiBold text-[28px] font-semibold leading-[42px] text-[#9F8555] sm:text-[53px] sm:leading-[80px]">
                  {value?.figure}
                </h4>
                <h4 className="text-[20px] leading-[30px] text-[#594226] sm:text-[38px] sm:leading-[57px]">
                  {value?.title}
                </h4>
              </div>
              <h4
                className={`${setFontFamily(value?.locale, "medium")} ${selected === index ? "hidden" : "block"} font-medium text-[#303030] sm:text-[24px] sm:leading-[36px]`}
              >
                {" "}
                {value?.title}
              </h4>
              <span
                className={`${selected === index ? "mt-[-15px] text-[40px] sm:mt-0 sm:text-[40px]" : "sm:text-[24px] sm:leading-[36px]"}  text-[#303030]`}
              >
                {selected === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-500 ease-in-out ${
                selected === index
                  ? "max-h-auto grid-rows-[1fr] opacity-100"
                  : "max-h-0 grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="flex flex-col gap-[20px] pb-[23px] sm:gap-[23px]">
                <p
                  className={`${setFontFamily(value?.locale, "medium")} text-[14px] font-medium leading-[20px] text-[#303030] sm:text-[27px] sm:leading-[38px]`}
                >
                  {value?.description}
                </p>
                <div className="h-[380px] w-full overflow-hidden">
                  <img
                    src={`/assets/images/ndf-imgs/tabs-img-${index + 1}.svg`}
                    alt="tabs img"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion;
