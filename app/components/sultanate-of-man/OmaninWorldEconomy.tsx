import React from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import { setFontFamily } from "@/app/data/data";
interface NumberCard {
  id: number;
  number: string;
  subtitle: string;
  locale?:string;
}


interface OmaninWorldEconomyProps {
  omanInWorldEco: {
    title: string;
    para: string;
    locale?:string;
  };
  numberCard: NumberCard[];
  locale?:string;
}
const OmaninWorldEconomy: React.FC<
  OmaninWorldEconomyProps
> = ({ omanInWorldEco, numberCard, locale }) => {
 
  return (
    <section className="oman-in-world-eco-section lg:my-[100px] sm:py-[50px] py-[40px]">
      <div className="flex flex-col lg:gap-[70px] sm:gap-[60px] gap-[20px]">
        <SimpleHeadingandText data={omanInWorldEco} />
        <ScreenContainer>
          <div className="lg:grid grid-cols-3 gap-x-[20px] hidden ">
            {numberCard?.map((data) => {
              return (
                <div
                  className="flex flex-col lg:gap-[30px] sm:gap-[12px] gap-[12px]"
                  key={data?.id}
                >
                  <h3 className="font-poppinsSemiBold lg:text-[70px] text-[32px] leading-[38px] sm:leading-[38px] font-semibold lg:leading-[22.4px] text-[#9E8557]">
                    {data?.number}
                  </h3>
                  <h5 className={`line-clamp-1 ${setFontFamily(data?.locale || "en","medium")} lg:text-[20px] sm:text-[18px] text-[16px] leading-[22px] sm:leading-[18px]  font-medium lg:leading-[25.4px] text-[#303030]`}>
                    {data?.subtitle}
                  </h5>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden grid grid-col-1">
          <div className="grid sm:grid-cols-2 grid-cols-1 ">
              <div className={`relative  ${locale === "en" ? "number-title-card-t":"number-title-card-t-ar"} sm:pb-[32px] pb-[30px] sm:pr-[32px] text-center  border-b-[1px] border-[#C2C2C2] flex flex-col gap-[20px]`}>
                  <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {numberCard[0].number}
                  </p>
                  <h5 className={`${setFontFamily(numberCard[0]?.locale || "en", 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {numberCard[0].subtitle}
                  </h5>
              </div>
              <div className={`sm:pb-[32px] sm:pt-0 py-[30px] ${locale === "en" ? "sm:pl-[32px]":"sm:pr-[32px]"}  text-center border-0 border-b-[1px] border-[#C2C2C2] flex flex-col gap-[20px]`}>
              <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {numberCard[1].number}
                  </p>
                  <h5 className={`${setFontFamily(numberCard[1]?.locale || "en", 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {numberCard[1].subtitle}
                  </h5>
              </div>
              
            </div>
          <div className={`relative  sm:pt-[32px] sm:pb-0  py-[30px] text-center flex flex-col gap-[20px] `}>
              <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {numberCard[2].number}
                  </p>
                  <h5 className={`${setFontFamily(numberCard[2]?.locale || "en", 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {numberCard[2].subtitle}
                  </h5>
              </div>
          </div>
        </ScreenContainer>
      </div>
    </section>
  );
};

export default OmaninWorldEconomy;
