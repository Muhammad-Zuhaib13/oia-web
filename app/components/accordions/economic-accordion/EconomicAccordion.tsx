"use client";
import { useState } from "react";
import ScreenContainer from "../../screencontainer/ScreenContainer";
import DetailEconomicContent from "./DetailEconomicContent";
import useDarkMode from "@/app/hooks/useDarkMode";
const EconomicAccordion = ({ data, locale }: any) => {
  // const { title, src } = data || {};
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id); 
  };
 const isDark = useDarkMode();
  return (
    <div >
      <ScreenContainer>
          <div className="flex h-full  w-full  shrink-0 flex-col ">
            <h2 className="section-heading font-DINABold font-bold text-[#9F8555] rtl:font-GESndBookBold">
              {data?.title}
            </h2>
            
            <div className="h-auto w-full">
              {data &&
                data?.map(
                  (item: any, index: number) => {
                    
                    return (
                      <DetailEconomicContent
                        key={index}
                        data={item}
                        locale={locale}
                        isOpen={activeAccordion === item.id}
                        onClick={() => toggleAccordion(item.id)}
                        className={
                          index === 0
                            ? "border-t-[1px] border-b-[1px] border-col"
                            : "border-b-[1px] border-col"
                        }
                        titleClass="textColTitleAcco"
                      />
                    );
                  },
                )}
            </div>
        
        </div>
      </ScreenContainer>
    </div>
  );
};

export default EconomicAccordion;
