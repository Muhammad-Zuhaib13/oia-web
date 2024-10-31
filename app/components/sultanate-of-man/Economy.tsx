import { Image } from "antd";
import React from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import { setFontFamily } from "@/app/data/data";
interface EcoTitlePara {
  title: string;
  para: string;
  locale?:string;
}

interface EcoCardData {
  id: number;
  src?: string;
  title?: string;
  number?: string;
  subText?: string;
  isText: boolean;
  isImage: boolean;
  locale?:string;
}

interface EconomyProps {
  ecoTitlePara: EcoTitlePara;
  ecoCardsData: EcoCardData[];
  locale:string;
}
const Economy: React.FC<EconomyProps> = ({
  ecoTitlePara,
  ecoCardsData,
  locale
}) => {

  const deStructureCard= [...ecoCardsData] 
  const order = [1, 2, 4, 3, 6, 5, 7, 8];
  const respEcoCardsData = deStructureCard.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  
  return (
    <section className="fund-allocation-section bg-[url('/assets/images/ndf-imgs/bg-pattren-img.png')] bg-cover lg:py-[100px] sm:py-[50px] py-[40px]">
      <div className="flex flex-col lg:gap-[70px]  gap-[20px]">
        <SimpleHeadingandText
          data={ecoTitlePara}
          lineClip={2}
        />
        <ScreenContainer>
          <div className="lg:grid hidden lg:grid-cols-4 grid-cols-2 lg:gap-y-[30px] lg:gap-x-[20px]  sm:gap-[20px] gap-y-[20px] gap-x-[12px]">
            {ecoCardsData?.map((data, index) => {
              return data?.isImage ? (
                <div
                  key={`image-${index}`}
                  className="plain-img-card sm:h-[300px] h-[200px] w-full lg:max-w-[300px] max-w-full	overflow-hidden"
                >
                  <img
                    alt="fund-allocation-img-1"
                    src={data?.src}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : data?.isText ? (
                <div
                  key={`text-${index}`}
                  className="flex sm:h-[300px] h-[200px] w-full lg:max-w-[300px] max-w-full flex-col justify-between overflow-hidden bg-[#FFFFFF] lg:py-[37.5px] lg:pl-[20px] lg:pr-[15px] sm:pt-[43px] sm:pb-[38px] sm:pl-[20px] sm:pr-[18px] pt-[24px] pb-[23px] pl-[11px] pr-[13px]"
                >
                  <h5 className={`${setFontFamily(data?.locale || "en","medium")} lg:text-[20px] sm:text-[24px] text-[14px] leading-[17px] font-medium capitalize sm:leading-[28px] text-[#202020]`}>
                    {data?.title}
                  </h5>
                  <div className={`flex flex-row items-baseline sm:gap-[20px] gap-[0px] ${data?.subText && locale==="ar" &&"flex-row-reverse"}`}>
                    <p className="font-poppinsBold lg:text-[70px] sm:text-[50px] sm:leading-[60px] text-[30px] leading-[36px] font-bold lg:leading-[84px] text-[#9E8557]">
                      {data?.number}
                    </p>
                    {data?.subText && (
                      <p className="font-poppinsMedium sm:text-[24px] text-[16px] font-medium leading-[28.8px] text-[#9E8557]">
                        {" "}
                        {data?.subText}
                      </p>
                    )}
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <div className="grid lg:hidden grid-cols-2 lg:gap-y-[30px] lg:gap-x-[20px]  sm:gap-[20px] gap-y-[20px] gap-x-[12px]">
            {respEcoCardsData?.map((data, index) => {
              return data?.isImage ? (
                <div
                  key={`image-${index}`}
                  className="plain-img-card sm:h-[300px] h-[200px] w-full lg:max-w-[300px] max-w-full	overflow-hidden"
                >
                  <img
                    alt="fund-allocation-img-1"
                    src={data?.src}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : data?.isText ? (
                <div
                  key={`text-${index}`}
                  className="flex sm:h-[300px] h-[200px] w-full lg:max-w-[300px] max-w-full flex-col justify-between overflow-hidden bg-[#FFFFFF] lg:py-[37.5px] lg:pl-[20px] lg:pr-[15px] sm:pt-[43px] sm:pb-[38px] sm:pl-[20px] sm:pr-[18px] pt-[24px] pb-[23px] pl-[11px] pr-[13px]"
                >
                  <h5 className={`${setFontFamily(data?.locale || "en","medium")} lg:text-[20px] sm:text-[24px] text-[14px] leading-[17px] font-medium capitalize sm:leading-[28px] text-[#202020]`}>
                    {data?.title}
                  </h5>
                  <div className={`flex flex-row items-baseline sm:gap-[20px] gap-[0px] ${data?.subText && locale==="ar" &&"flex-row-reverse"}`}>
                    <p className="font-poppinsBold lg:text-[70px] sm:text-[50px] sm:leading-[60px] text-[30px] leading-[36px] font-bold lg:leading-[84px] text-[#9E8557]">
                      {data?.number}
                    </p>
                    {data?.subText && (
                      <p className="font-poppinsMedium sm:text-[24px] text-[16px] font-medium leading-[28.8px] text-[#9E8557]">
                        {" "}
                        {data?.subText}
                      </p>
                    )}
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </ScreenContainer>
      </div>
    </section>
  );
};

export default Economy;
