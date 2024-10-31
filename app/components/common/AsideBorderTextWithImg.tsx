"use client";
import ScreenContainer from "../screencontainer/ScreenContainer";

const AsideBorderTextWithImg = ({
  data,
  locale,
  className,
  swap=false,
  isUseChangeClrDark = false,
}: any) => {
  const { title, cards, paras, imgSrc, bottomParas } =
    data || {};

  return (
    <div
      className={`py-[60px] lg:py-[100px]  ${className}`}
    >
      <div className="block">
        <ScreenContainer>
          <div className="flex flex-col items-start justify-between gap-[30px] lg:flex-row lg:gap-[70px]">
            {/* Left side: Text section */}
            <div className=" flex flex-col gap-[20px] md:gap-[30px] lg:hidden">
              {title && (
                <h2 className="mainHeading rtl:font-TajawalBold">
                  {title}
                </h2>
              )}
              {paras && (
                <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                  {paras &&
                    paras.map(
                      (para: any, index: number) => {
                        return (
                          <div key={index}>
                            <p
                              className={`paragraph rtl:font-TajawalRegular`}
                            >
                              {para}
                            </p>
                          </div>
                        );
                      },
                    )}
                </div>
              )}
            </div>
            <div className="order-2 flex h-full w-full grow flex-col gap-[30px] lg:order-1">
              <div className=" hidden flex-col gap-[12px] md:gap-[30px] lg:flex">
                {title && (
                  <h2 className="mainHeading rtl:font-TajawalBold">
                    {title}
                  </h2>
                )}
                {paras && (
                  <div className="flex flex-col">
                    {paras &&
                      paras.map(
                        (para: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]"
                            >
                              <p
                                className={`paragraph rtl:font-TajawalRegular`}
                              >
                                {para}
                              </p>
                            </div>
                          );
                        },
                      )}
                  </div>
                )}
              </div>

              {cards && (
                <div className="flex flex-col  gap-[20px]  lg:gap-[30px]">
                  {cards?.map(
                    (value: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`flex-col justify-center border-0 border-solid border-lightGrey transition-colors duration-500
                      ${index !== data?.cards?.length - 1 ? "border-b-[2px] pb-[20px]" : ""} 
                      pl-0 lg:border-b-0 lg:border-l-2 border-col
                      lg:pl-[20px] rtl:border-0 rtl:border-b-[2px]
                      rtl:border-l-0 rtl:pl-0 rtl:pr-0
                      lg:rtl:border-r-2 rtl:lg:border-b-0 lg:rtl:pr-[20px]`}
                        >
                          <div className="flex h-auto cursor-default flex-col justify-between gap-[20px]">
                            {value?.title && (
                              <h2 className={`subHeading ${isUseChangeClrDark && "subHeadingFontClrBW"} rtl:font-TajawalBold`}>
                                {value?.title}
                              </h2>
                            )}
                            {value?.paras && (
                              <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                                {value?.paras &&
                                  value?.paras.map(
                                    (
                                      para: any,
                                      index: number,
                                    ) => {
                                      return (
                                        <div key={index}>
                                          <p
                                            className={`paragraph rtl:font-TajawalRegular`}
                                          >
                                            {para}
                                          </p>
                                        </div>
                                      );
                                    },
                                  )}
                              </div>
                            )}
                            {value?.list && (
                              <ul className="disc-br flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px]">
                                {value?.list.map(
                                  (
                                    item: any,
                                    index: number,
                                  ) => (
                                    <li
                                      key={index}
                                      className="flex flex-row items-baseline gap-[12px]"
                                    >
                                      <span
                                        className={`relative flex flex-row gap-[4px]  ${
                                          locale === "ar"
                                            ? "before:left-auto before:right-[-16px]"
                                            : "before:left-[-16px]"
                                        } paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-[''] rtl:font-TajawalRegular `}
                                      >
                                        <span className="paragraph !font-bold rtl:font-TajawalRegular rtl:!font-normal">
                                          {item?.title}
                                        </span>
                                        <span className="paragraph rtl:font-TajawalRegular">
                                          {item?.desc}
                                        </span>
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              )}
              {bottomParas && (
                <div className="flex flex-col gap-[15px]">
                  {bottomParas &&
                    bottomParas.map(
                      (para: any, index: number) => {
                        return (
                          <div key={index}>
                            <p
                              className={`paragraph rtl:font-TajawalRegular`}
                            >
                              {para}
                            </p>
                          </div>
                        );
                      },
                    )}
                </div>
              )}
            </div>
            {/* Right side: Image section */}
            {imgSrc && (
              <div className={`order-1 flex h-[200px] sm:h-[380px]  lg:h-[425px] w-full shrink-0 grow rounded-[6px] lg:order-2 lg:max-w-[511px]`}>
                <img
                  className={`h-full w-full flex-col rounded-[6px] object-cover`}
                  src={imgSrc}
                  alt="tab img"
                />
              </div>
            )}
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default AsideBorderTextWithImg;
