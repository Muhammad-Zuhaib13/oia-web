"use client";

import ScreenContainer from "./ScreenContainer";
const TitleWithImg = ({ data, locale }: any) => {
  
  const { title, imgSrc } = data;
  return (
    <div className="">
      <ScreenContainer>
        <div className="flex flex-col gap-[24px] lg:gap-[30px]">
          {title && (
            <div>
              <h2 className="mainHeading rtl:font-TajawalBold">{title}</h2>
            </div>
          )}
          {imgSrc && (
            <div className="h-[200px] md:h-[380px] lg:h-[425px] w-full overflow-hidden rounded-[6px]">
              <img
                src={`${imgSrc}`}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TitleWithImg;
