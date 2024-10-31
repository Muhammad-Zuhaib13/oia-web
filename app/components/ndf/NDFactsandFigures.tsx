"use client";
import { Image } from "antd";
import { useState } from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import {setFontFamily} from "../../data/data";
import SimpleAccordion from "./SimpleAccordion";
const NDFactsandFigures = ({data}: any) => {
  const [investmentType, setInvestmentType] = useState(1);
  const ndfactsandfigure = {
    title: "National Development Facts and Figures",
    para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  };
  return (
    <div className="bg-[url('/assets/images/ndf-imgs/bg-pattren-img.png')] bg-cover w-full lg:py-[100px] sm:pt-[76px] sm:pb-[37px] py-[40px]">
       <div className="flex flex-col lg:gap-[96.5px] sm:gap-[38px] gap-[20px]">
        <SimpleHeadingandText data={data} />
        <div className="lg:block hidden">
        <ScreenContainer>
          <div className="hidden lg:flex h-[646px] justify-between">
            <div className="flex h-full w-full max-w-[620px] flex-col justify-center gap-[70px]">
              {data?.cards?.map((value:any,index:number)=>{
                return(
                  <div
                  key={index}
                onMouseOver={() => setInvestmentType(value?.id)}
                className={`flex-col ${value?.locale === "en" ? "border-l-2 pl-[20px]" : "border-r-2 pr-[20px]" } transition-colors duration-500 ${investmentType === value?.id? `border-solid border-[#9E8557]` : `border-transparent`} justify-center`}
              >
                <div className="flex h-[170px] flex-col justify-between cursor-default">
                  <h2 className="font-poppinsBold text-[36px] font-bold leading-[46.8px] text-[#9F8555]">
                    {value?.figure}
                  </h2>
                  <h3 className={`${setFontFamily(value?.locale, 'bold')}  text-[24px] font-bold capitalize leading-[31.2px] text-[#5A4427]"`}>
                   {value?.title}
                  </h3>
                  <p className={`${setFontFamily(value?.locale, 'medium')} text-[18px] font-medium leading-[27px] text-[#202020]`}>
                  {value?.description}
                  </p>
                </div>
              </div>
                )
              })}
            </div>
            <div className="flex h-[640px] w-full max-w-[555px]">
              <Image
                className={`h-full w-[100%] rounded flex-col ${data?.locale === "en" ? "ml-auto" : "mr-auto" } `}
                src={`/assets/images/ndf-imgs/tabs-img-${investmentType}.svg`}
                alt="Investment Banner"
                preview={false}
              />
            </div>
          </div>
      </ScreenContainer>
      </div>
      <div className="block lg:hidden">
      <ScreenContainer>
          <SimpleAccordion data={data} />
          </ScreenContainer>
        </div>
      </div>
    </div>
  );
};
export default NDFactsandFigures;
