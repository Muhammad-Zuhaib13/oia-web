import { Image } from "antd";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import {setFontFamily} from "../../data/data"
import Divider from '@mui/material/Divider';
const CreditRating:React.FC<any> = ({data}: any) => {
  
  const {title, description, cards, locale} = data;
  const respCardData = cards?.filter((card:any)=>([2,4,5,7]?.includes(card?.id)));
  return (
    <section className="credit-rating-section bg-[#FFFFFF] lg:py-[100px] sm:py-[50px] py-[40px]">
      <div className="flex flex-col lg:gap-[70px] sm:gap-[60px] gap-[32px]">
        <SimpleHeadingandText data={data} />
        <ScreenContainer>
          <div className="lg:grid grid-cols-4  gap-y-[30px] gap-x-[20px] hidden">
            {cards?.map((data:any, index:number) => {
              return data?.isImage ? (
                <div
                  key={`image-${index}`}
                  className="plain-img-card h-[300px] w-full lg:max-w-[300px]	overflow-hidden"
                >
                  <Image
                    alt="fund-allocation-img-1"
                    src={data?.src}
                    className="h-full w-[100%] object-cover"
                    preview={false}
                  />
                </div>
              ) : data?.isText ? (
                <div
                  key={`text-${index}`}
                  className="flex h-[300px] w-full max-w-[300px] flex-col justify-between overflow-hidden bg-[#FEFAF1] px-[20px] py-[37.5px]"
                >
                  <h5 className={`${setFontFamily(data?.locale, 'medium')} text-[20px] font-medium capitalize leading-[28px] text-[#202020]`}>
                    {data?.title}
                  </h5>
                  <p className="font-poppinsMedium text-[83.99px] font-medium leading-[100.78px] text-[#9E8557]">
                    {data?.number}
                  </p>
                </div>
              ) : null;
            })}
          </div>
          <div className="lg:hidden grid sm:grid-cols-2 grid-cols-1 ">
              <div className={`relative ${locale==="en"? "number-title-card-t":"number-title-card-t-ar"} sm:pb-[32px] pb-[30px] sm:pr-[32px] text-center  border-b-[1px] border-[#C2C2C2] flex flex-col gap-[20px]`}>
                  <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {respCardData[0].number}
                  </p>
                  <h5 className={`${setFontFamily(locale, 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {respCardData[0].title}
                  </h5>
              </div>
              <div className={`sm:pb-[32px] sm:pt-0 py-[30px] sm:pl-[32px] text-center border-0 border-b-[1px] border-[#C2C2C2] flex flex-col gap-[20px]`}>
              <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {respCardData[1].number}
                  </p>
                  <h5 className={`${setFontFamily(locale, 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {respCardData[1].title}
                  </h5>
              </div>
              <div className={`relative ${locale==="en"? "number-title-card-b":"number-title-card-b-ar"} sm:pt-[32px] sm:pb-0 sm:pr-[32px] py-[30px] text-center flex flex-col gap-[20px] border-b-[1px] border-[#C2C2C2] sm:border-b-0`}>
              <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {respCardData[2].number}
                  </p>
                  <h5 className={`${setFontFamily(locale, 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {respCardData[2].title}
                  </h5>
              </div>
             
              <div className={`sm:pt-[32px] pt-[30px] sm:pl-[32px] text-center flex flex-col gap-[20px]`}>
              <p className="font-poppinsSemiBold sm:text-[32px] text-[30px] leading-[36px] font-semibold sm:leading-[39px] text-[#9E8557]">
                    {respCardData[3].number}
                  </p>
                  <h5 className={`${setFontFamily(locale, 'medium')} sm:text-[18px] text-[16] leading-[16px] font-medium capitalize sm:leading-[18px] text-[#202020]`}>
                    {respCardData[3].title}
                  </h5>
              </div>
            </div>
        </ScreenContainer>
      </div>
    </section>
  );
};

export default CreditRating;
