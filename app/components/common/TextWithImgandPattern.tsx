"use client";
import ScreenContainer from "./ScreenContainer";

const TextWithImgandPattern: React.FC<any> = ({
  data,
  locale,
}) => {
  const { title, bgSrc, paras, cta } = data;
  const handleRoute = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="h-auto w-full">
      <div
        className={`relative w-full overflow-hidden py-[72px] sm:py-[141px] lg:py-[120px]`}
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ScreenContainer>
          <div className="w-[100%] md:w-[90%] lg:w-[85%] xl:w-[70%]">
            <div className="flex flex-col">
              <div className="mb-[16px] flex flex-col gap-[16px] sm:mb-[32px] sm:gap-[32px] lg:mb-[50px] lg:gap-[30px]">
                {title && (
                  <div>
                    <h2
                      className={`sectionTitle !text-[#FFFFFF] rtl:font-TajawalBold`}
                    >
                      {title}
                    </h2>
                  </div>
                )}
                {paras && (
                  <div className="flex flex-col gap-[15px]">
                    {paras.map(
                      (para: any, index: number) => {
                        return (
                          <div key={index}>
                            <p
                              className={`paragraph !text-[#FFFFFF] rtl:font-TajawalRegular`}
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
              <div>
              <button
                className="flex flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#FFFFFF] px-[20px] py-[14px]"
                onClick={() => handleRoute(cta?.url)}
              >
                <span className="cta !text-[#9E8557] rtl:font-TajawalRegular">
                  {cta?.label}
                </span>
                <span>
                  <img
                    src={"/assets/icons/arrow-left-br.svg"}
                    className="h-[18px] w-[18px] object-fill rtl:rotate-180"
                    alt="arrow"
                  />
                </span>
              </button>
              </div>
            </div>
          </div>
        </ScreenContainer>
        <div
          className={`absolute bottom-0 z-0 h-[113] w-[102px] sm:bottom-[-70px] sm:h-[216px] sm:w-[194px] xl:h-[341px] xl:w-[308px] ltr:right-0 ltr:sm:right-[-42px]  ltr:lg:right-0 rtl:left-0  rtl:sm:left-[-42px] rtl:lg:left-0`}
        >
          <img
            src="/assets/images/inCountry/inCountryBannerPatternAr.png"
            alt="Pattern"
            className="h-full w-full grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default TextWithImgandPattern;
