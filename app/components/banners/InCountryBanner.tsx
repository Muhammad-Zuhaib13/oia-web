"use client";
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../common/ScreenContainer";

const BannerWithSidePattren: React.FC<any> = ({
  data,
  locale,
}) => {
  let bg = data?.bannerSrc;
  return (
    <section className="h-auto w-full">
      <div
        className={`relative w-full overflow-hidden py-[72px] sm:py-[141px] lg:py-[120px]`}
        style={{
          backgroundImage: `url(${data?.bannerSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ScreenContainer>
          <div className="w-[100%] md:w-[90%] lg:w-[85%] xl:w-[70%]">
            <div className="flex flex-col">
              <div className="mb-[16px] flex flex-col gap-[16px] sm:mb-[32px] sm:gap-[32px] lg:mb-[50px] lg:gap-[30px]">
                <div>
                  <h1
                    className={`secTitle ${setFontFamily(data?.locale || "en", "bold")} text-[36px] font-bold leading-[60px] text-[#FFFFFF]`}
                  >
                    {data?.title}
                  </h1>
                </div>
                <div>
                  <h3
                    className={`secDesc pt-[4px] ${setFontFamily(data?.locale || "en", "medium")} text-[18px] font-medium	 leading-[22px] text-[#FFFFFF]`}
                  >
                    {data?.description}
                  </h3>
                </div>
              </div>

              <div>
                <button className="flex h-[48px] w-auto cursor-default flex-row items-center gap-[8px] font-bold">
                  <span
                    className={`${setFontFamily(data?.locale, "bold")} text-[14px] font-bold leading-[10px] text-[#FFFFFF] sm:text-[27px] sm:leading-[18px] lg:text-[18px] lg:leading-[22px]`}
                  >
                    {data?.btnTitle}
                  </span>
                  <span
                    className={`btn-circle-hover flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF] pl-[2px] lg:h-[48px] lg:w-[48px] ${data?.locale === "en" ? "" : "btn-ar-img-rotate"}`}
                  >
                    <img
                      src="/assets/icons/chervon-left-black.svg"
                      className="h-[9px] w-[6px] lg:h-[14px] lg:w-[9px]"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScreenContainer>

        <div
          className={`absolute bottom-0 z-0 ${data?.locale === "ar" ? "left-0 sm:left-[-42px] lg:left-0" : "right-0 sm:right-[-42px] lg:right-0"} h-[113] w-[102px] sm:bottom-[-70px]  sm:h-[216px] sm:w-[194px]  xl:h-[341px] xl:w-[308px]`}
        >
          <img
            src={data.imgPatternEn}
            alt="Pattern"
            className="h-full w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerWithSidePattren;
