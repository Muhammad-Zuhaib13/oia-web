
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";;
const ParaWithBottomImg: React.FC<any> = ({ data, locale }) => {
  let bg= data?.bannerSrc
  return (
    <section className="h-auto w-full">
      
      <div 
      className={`relative w-full lg:py-[120px] sm:py-[141px] py-[72px] overflow-hidden`}
        style={{ 
          backgroundImage: `url(${data?.bannerSrc})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover" }}
      >
        <ScreenContainer>
          <div className="w-[100%] md:w-[90%] lg:w-[85%] xl:w-[70%]">
            <div className="flex flex-col">
              <div className="lg:mb-[50px] sm:mb-[32px] mb-[16px] flex flex-col lg:gap-[30px] sm:gap-[32px] gap-[16px]">
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
                    className={`${setFontFamily(data?.locale, "bold")} lg:text-[18px] sm:text-[27px] text-[14px] leading-[10px] sm:leading-[18px] font-bold lg:leading-[22px] text-[#FFFFFF]`}
                  >
                    {data?.btnTitle}
                  </span>
                  <span
                    className={`btn-circle-hover flex lg:h-[48px] w-[30px] h-[30px] lg:w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF] pl-[2px] ${data?.locale === "en" ? "" : "btn-ar-img-rotate"}`}
                  >
                    <img
                      src="/assets/icons/chervon-left-black.svg"
                      className={`lg:h-[14px] h-[9px] w-[6px] lg:w-[9px] relative z-10`}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScreenContainer>

        <div className={`absolute bottom-0 z-0 ${data?.locale === "ar" ? "lg:left-0 sm:left-[-42px] left-0" : "lg:right-0 sm:right-[-42px] right-0"} h-[113] w-[102px] sm:bottom-[-70px]  sm:w-[194px] sm:h-[216px]  xl:h-[341px] xl:w-[308px]`}>
          <img
            src={data.imgPatternEn}
            alt="Pattern"
            className="w-full h-full grayscale"
          />
        </div>

      </div>
    </section>
  );
};

export default ParaWithBottomImg;
