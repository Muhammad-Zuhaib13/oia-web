"use client";
import useDarkMode from "@/app/hooks/useDarkMode";

const PolygonBg = ({
  bgImg = "/assets/images/pattern-polyg-img.png",
  className="",
  children,
  isShowPy=true,
}: any) => {
  const isDark = useDarkMode() || false;
  const bgThemeImg = !isDark ? bgImg :"/assets/images/pattern-polyg-b-img.png"
  return (
    <div
    className={`${className} ${isShowPy && "lg:py-[80px] sm:py-[50px] py-[40px]"} w-full h-auto polygon-bg`}
    style={{
        backgroundImage: `url(${bgThemeImg})`,
      }}
    >
      {children}
    </div>
  );
};

export default PolygonBg;
