import { Image } from "antd";
import ScreenContainer from "../screencontainer/ScreenContainer";
import {setFontFamily} from "../../data/data"


const OIAManagement: React.FC<any> = ({ data }) => {
  return (
    <div className="relative bg-[#FEFAF1] bg-[url('/assets/images/inCountry/bannerBg.png')] lg:py-[100px] sm:py-[50px] py-[40px]">
      <ScreenContainer>
        <div>
          <div className="lg:mb-[50px] sm:mb-[32px] mb-[16px] flex w-full flex-col lg:gap-[36px] sm:gap-[32px] gap-[16px]">
            <h3 className={`secTitle ${setFontFamily(data?.locale, 'bold')} text-[#9f8555]`}>{data.title}</h3>
            <p className={`secDesc ${setFontFamily(data?.locale, 'medium')}text-[18px] font-medium leading-[22px] text-[#303030]`}>
              {data.description}
            </p>
          </div>
        </div>

        {/* <ScreenContainer> */}
        <div className="flex w-full justify-between lg:flex-nowrap sm:flex-wrap flex-wrap gap-y-[15px] md:gap-y-[0px] sm:gap-y-[0px] md:flex-wrap">
          {data.cards?.map((key: any) => (
            <div
              className="flex w-full lg:w-[24%] flex-col  md:w-[49%] sm:w-[49%]  md:mb-[20px] sm:mb-[15px]"
              key={key.id}
            >
              <div className="flex h-[234px] w-full items-center justify-center bg-white">
                <Image
                  src={`/assets/images/inCountry/people/${key.image}.svg`}
                  preview={false}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-auto min-h-[116px] w-full flex-col gap-[18px] bg-[#D8B97A] px-[20px] pb-[28px] pt-[26px]">
                <h2 className={`innerNewsCardTitle ${setFontFamily(key?.locale, 'bold')} text-[20px] font-bold leading-[24px] text-white`}>
                  {key.name}
                </h2>
                <h4 className={`innerNewsCardDesc ${setFontFamily(key?.locale, 'medium')} text-[16px] font-medium leading-[19px] text-white`}>
                  {key.role}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default OIAManagement;
