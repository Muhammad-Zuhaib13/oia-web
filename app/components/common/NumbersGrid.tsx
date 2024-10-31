"use client"
import ScreenContainer from "./ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const NumbersGrid = ({ data, locale }: any) => {
  const numbersCard = data || [];
  const isDark = useDarkMode();
  return (
    <div className="">
      <ScreenContainer>
        <div className="w-full overflow-hidden">
          <div className="w-[100.1%]">
            <div className="relative flex justify-between flex-wrap gap-y-[30px] md:gap-[0] md:flex-nowrap lg:grid lg:grid-cols-4 lg:justify-normal">
              <div className={`absolute bottom-0 left-0 right-0 top-0 border-[1px] ${isDark ? "border-[#000000]":"border-[#ffffff]"} `}></div>
              {numbersCard &&
                numbersCard.map(
                  (item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`border-b-[0px] lg:border-b-[1px] ${isDark ? "lg:border-b-[#ffffff]":"lg:border-b-[#9E8557]"}  py-[0px] md:py-[40px] w-[24%] md:w-auto`}
                      >
                        <div
                           className={`flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] border-r-[0px] lg:border-r-[1px] ${isDark ? "border-r-[#ffffff]":"border-r-[#9E8557]"} text-left ${
                            (index === 0 || index === 4)
                              ? locale === "ar"
                                ? "lg:text-center"
                                : "lg:text-center"
                              : "lg:text-center"
                          }`}
                        >
                          <h3 className={`globalIndicators font-poppinsSemiBold !font-semibold ${isDark ? "!text-[#ffffff]":"!text-[#5A4427]"}`}>
                            {item?.figure}
                          </h3>
                          <h5 className={`poppinsInContent font-poppinsMedium !text-[16px] lg:!text-[20px] font-medium ${isDark ? "text-[#ffffff]":"text-[#646464]"}`}>
                            {item?.year}
                          </h5>
                        </div>
                      </div>
                    );
                  },
                )}
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default NumbersGrid;
