"use client";
import React from "react";
import ScreenContainer from "./ScreenContainer";
const TextWithImgandBtn: React.FC<any> = ({
  data,
  locale,
  className,
}) => {
 ;
  const handleRoute = (url: string) => {
    if (url) {
      window.open(url, "_blank", 'noopener,noreferrer');
    }
  };
  const { title, paras, imgSrc, cta } = data || {};
  return (
    <div className={`${className}`}>
      {(title || paras || imgSrc || cta) && (
        <ScreenContainer>
          <div className={`text-container-img-btn`}>
            {(title || paras) && (
              <div className="flex flex-col justify-between gap-[20px] lg:gap-[30px]">
                {title && (
                  <div>
                    <h2 className="mainHeading rtl:font-TajawalBold">
                      {title}
                    </h2>
                  </div>
                )}
                <div className="flex w-full flex-col lg:flex-row justify-between gap-[30px] lg:gap-[0px]">
                  {paras && (
                    <div className="flex lg:w-[63%] max-w-full w-full shrink-0 flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                      {paras.map(
                        (para: any, index: number) => (
                          <div key={index}>
                            <p className="paragraph rtl:font-TajawalRegular">
                              {para}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                  {(imgSrc || cta) && (
                    <div className="aside-img-btn my-auto lg:w-[26.5%] flex h-full w-full flex-col lg:items-end items-start lg:justify-end justify-start">
                      {imgSrc && (
                        <img
                          src={`${imgSrc}`}
                          className="h-auto w-auto"
                        />
                      )}
                      {cta && (
                        <div className="flex flex-col items-end justify-center gap-[20px]">
                          {cta?.btntitle && (
                            <span className="paragraph  rtl:font-TajawalRegular">
                              {cta?.btntitle}
                            </span>
                          )}
                          <button
                            className="flex h-auto w-full shrink-0 flex-row items-center justify-between gap-[24px] rounded-[4px] bg-[#7B6134] px-[12px] py-[16px]"
                            onClick={() => {handleRoute(cta?.url)}}
                          >
                            <span className="paragraph !text-white !text-[15px] rtl:font-TajawalMedium">
                              {cta?.label}
                            </span>
                            <span>
                              <img
                                src={
                                  "/assets/icons/arrow-sq.svg"
                                }
                                className="h-[18px] w-[18px] object-fill rtl:rotate-180"
                                alt="arrow"
                              />
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScreenContainer>
      )}
    </div>
  );
};

export default TextWithImgandBtn;
