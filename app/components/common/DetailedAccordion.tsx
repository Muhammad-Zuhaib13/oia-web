"use client";
import { useState } from "react";
import DetailedAccordionContent from "./DetailedAccordionContent";
import useDarkMode from "@/app/hooks/useDarkMode";
const DetailedAccordion = ({ data, locale }: any) => {
  // const { title, src } = data || {};
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id); 
  };
  const isDark = useDarkMode() || false;
 console.log(data)
  return (
    <div >
      {/* <ScreenContainer> */}
          <div className="flex h-full  w-full shrink-0 flex-col ">
            <h2 className="accordionTitle rtl:font-TajawalBold ">
              {data?.title}
            </h2>
            {data?.subTitle && <h3>{data?.subTitle}</h3>}
            <div className="h-auto w-full">
              {data &&
                data?.map(
                  (item: any, index: number) => {
                    return (
                      <DetailedAccordionContent
                        key={index}
                        data={item}
                        locale={locale}
                        isOpen={activeAccordion === item.id}
                        onClick={() => toggleAccordion(item.id)}
                        isUseDarkBW={true}
                        className={
                          index === 0
                            ? `border-t-[1px]  ${isDark ? "border-t-[#FFFFFF] border-b-[#FFFFFF]":"border-t-[#9E8557] border-b-[#9E8557]" } border-b-[1px] `
                            : `border-b-[1px] ${isDark ? "border-b-[#FFFFFF]":"border-b-[#9E8557]"} `
                        }
                      />
                    );
                  },
                )}
            </div>
        
        </div>
      {/* </ScreenContainer> */}
    </div>
  );
};

export default DetailedAccordion;
