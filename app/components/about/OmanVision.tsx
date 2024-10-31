"use client";
import ScreenContainer from "../screencontainer/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const OmanVision = ({ data, locale }: any) => {
  const { desc, img, imgDark, alt } = data || {};
  const isDark = useDarkMode();
  return (
    <div className="pb-[60px] lg:pb-[100px]">
      <ScreenContainer>
        <div className={`flex lg:order-1 order-2 flex-col lg:flex-row items-start gap-[20px] lg:gap-[93px] lg:items-center justify-between ${isDark? "bg-[url('/assets/images/pattern-polyg-b-img.png')]" : " bg-[url('/assets/images/pattern-polyg-img.png')]"} bg-cover px-[20px] py-[30px] sm:px-[24px] lg:px-[65px]`}>
          {desc && (
            <p
              className={`paragraph rtl:font-TajawalRegular order-2 lg:order-1`}
            >
              {desc}
            </p>
          )}
          <div
          className=" shrink-0  overflow-hidden w-auto  h-[80px] lg:h-[150px] !order-1 lg:order-2 "
        >
          {img && (
            <img
              src={isDark ? imgDark : img}
              alt={alt}
              className={` h-full w-full object-contain `}
            />
          )}
        </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default OmanVision;
