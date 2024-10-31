"use client";

import ScreenContainer from "./ScreenContainer";
const Paras = ({ data, locale }: any) => {
  const paras  = data;
  return (
    <>
      {paras && (
        <ScreenContainer>
          <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
            {paras?.map((para: any, index: number) => (
              <div key={index} className="last:mb-0">
                <p className="paragraph rtl:font-TajawalRegular">
                  {para}
                </p>
              </div>
            ))}
          </div>
        </ScreenContainer>
      )}
    </>
  );
};

export default Paras;
