"use client";
import { useState } from "react";
import PolygonBg from "../common/PolygonBg";
import ScreenContainer from "../common/ScreenContainer";
import Accordion from "./Accordion";

const OpenDataAccordion = ({ data, locale }: any) => {
  console.table(data);
  const [activeAccordion, setActiveAccordion] = useState<
    number | null
  >(1);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  if (data) {
    return (
      <PolygonBg>
        <ScreenContainer>
          {
            data?.map((item:any, index:number )=>{
                return (
                    <Accordion
                      key={index}
                      data={item}
                      locale={locale}
                      isOpen={activeAccordion === item.id}
                      onClick={() =>
                        toggleAccordion(item.id)
                      }
                      className={
                        index === 0
                          ? "border-b-[1px] border-t-[1px] border-col"
                          : "border-b-[1px] border-col"
                      }
                    />
                )
            })
          }
        </ScreenContainer>
      </PolygonBg>
    );
  } else {
    <></>;
  }
};

export default OpenDataAccordion;
