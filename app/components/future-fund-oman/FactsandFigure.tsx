"use client";
import NumberCard from "../common/NumberCard";
import ScreenContainer from "../common/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const FactsandFigure = ({
  data,
  locale,
  className = "",
  swap=false
}: any) => {
  const {
    firstNumberCard,
    title,
    imgOne,
    imgTwo,
    imgThree,
    secondNumberCard,
    thirdNumberCard,
    cta,
  } = data || {};
  const handleRoute = (url: string) => {
    if (url) {
      window.open(url, "_blank", 'noopener,noreferrer');
    }
  };
  const isDark = useDarkMode() || false;
  return (
    <div className={`${className} py-[60px] lg:py-[100px]`}>
      <ScreenContainer>
        <div className="flex flex-col gap-[20px] lg:gap-[30px]">
          <h2 className={`mainHeading  rtl:font-TajawalBold`}>
            {title}
          </h2>
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <div className="h-[180px] md:h-[380px] lg:h-[253px] w-full rounded-[4px] overflow-hidden">
              <img
                src={`${imgOne}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-auto w-full">
              <NumberCard
                data={firstNumberCard}
                locale={locale}
                className={`items-center justify-center  ${isDark ? "!bg-[#FFFFFF]":"!bg-[#FEFAEF]"}`}
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-[24px]">
              <div className="h-[180px] lg:h-[300px] w-full overflow-hidden">
                <NumberCard data={secondNumberCard} locale={locale} className={`justify-center  ${isDark ? "!bg-[#FFFFFF]":"!bg-[#FEFAEF]"} px-[30px]`} />
              </div>
              <div className="h-[180px] lg:h-[300px] w-full overflow-hidden rounded-[4px]">
                <img src={imgTwo} className="h-full w-full object-cover" alt="picture" />
              </div>

              <div className={`${swap ? "order-last lg:order-none" : ""} h-[180px] lg:h-[300px] w-full overflow-hidden`}>
                <NumberCard data={thirdNumberCard} locale={locale} className={`justify-center  ${isDark ? "!bg-[#FFFFFF]":"!bg-[#FEFAEF]"} lg:px-[30px]`} />
              </div>
              <div className={`${swap ? "order-none lg:order-last" : ""} h-[180px] lg:h-[300px] w-full overflow-hidden rounded-[4px]`}>
                <img src={imgThree} className="h-full w-full object-cover" alt="picture three" />
              </div>
            </div>
            <div className="flex h-[200px] w-full items-center justify-center ctaBg rounded-[4px]">
              <button
                className="flex flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[10px] sm:px-[20px] py-[14px]"
                onClick={() => handleRoute(cta?.url)}
              >
                <span className="cta text-[18px] !text-[#FFFFFF] rtl:font-TajawalBold">
                  {cta?.label}
                </span>
                <span>
                  <img
                    src={"/assets/icons/arrow-sq.svg"}
                    className="h-[18px] w-[18px] object-fill rtl:rotate-180"
                    alt="arrow"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default FactsandFigure;
