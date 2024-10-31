
"use client"
import { useRouter } from "@/i18n.config";
import ScreenContainer from "../screencontainer/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
const NewsRoom: React.FC<any> = ({ data }) => {
  const router=useRouter()
  const newsRoomTitleBtn = {
    title: data?.title,
    btnText: data?.btnText,
  };
  const locale = data?.currentLang || "en";
  let cardData = [
    {
      id: data?.newsRoomCards?.newsCardOne?.id,
      content: data?.newsRoomCards?.newsCardOne?.content,
      date: data?.newsRoomCards?.newsCardOne?.date,
      img: data?.newsRoomCards?.newsCardOne?.img,
      locale:locale,
      desc:data?.newsRoomCards?.newsCardOne?.desc,
      newsId:2
    },
    {
      id: data?.newsRoomCards?.newsCardTwo?.id,
      content: data?.newsRoomCards?.newsCardTwo?.content,
      date: data?.newsRoomCards?.newsCardTwo?.date,
      img: data?.newsRoomCards?.newsCardTwo?.img,
      locale:locale,
      desc:data?.newsRoomCards?.newsCardTwo?.desc,

      newsId:3
    },
    {
      id: data?.newsRoomCards?.newsCardThree?.id,
      content: data?.newsRoomCards?.newsCardThree?.content,
      date: data?.newsRoomCards?.newsCardThree?.date,
      img: data?.newsRoomCards?.newsCardThree?.img,
      desc:data?.newsRoomCards?.newsCardThree?.desc,

      locale:locale,
      newsId:4
    },
  ];
  const isDark = useDarkMode();
  return (
    <ScreenContainer>
      <div className="lg:pb-[95px] lg:pt-[80px] sm:py-[50px] py-[40px] flex flex-col lg:gap-[50px] sm:gap-[32px] gap-[20px]">
        <div className="flex items-center justify-between	">
          <div>
            <h2 className={`mainHeading  rtl:font-TajawalBold`}>
              {newsRoomTitleBtn?.title}
            </h2>
          </div>
          <button className="flex lg:h-[48px] w-auto cursor-default flex-row items-center gap-[8px] font-bold h-[30px]">
            <span className={`cta  font-bold rtl:font-TajawalBold  text-[#9F8555]`}>
              {newsRoomTitleBtn?.btnText}
            </span>
            <span
              className={`btn-circle-hover shrink-0 flex lg:h-[48px] lg:w-[48px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] cursor-pointer items-center justify-center rounded-full pl-[2px] ${locale === "en" ? "" : "btn-ar-img-rotate"}`}
            >
              <img
                src="/assets/icons/chervon-left-white.svg"
               className="lg:h-[14px] lg:w-[9px] h-[9px] w-[6px] relative z-10"
               style={{filter: isDark ? "invert(1)":"" }}
               alt="chevron"
              />
            </span>
          </button>
        </div>
        <div className=" flex lg:flex-row sm:flex-col flex-col border-0 border-t-[1px] border-[#DCDEE0]">
          <div
          onClick={()=>router.push(`${locale}/media-center/news-details/${1}`)}
            className={`flex-1 border-0 ${data?.currentLang === "en" ? "lg:border-r-[1px]" : "lg:border-l-[1px]"} border-[#DCDEE0] ${data?.currentLang === "en" ? "lg:pr-[46px] sm:pr-0 pr-0" : "lg:pl-[46px] sm:pl-0 pl-0"}  lg:pt-[20px] sm:pt-[18px] pt-[10px]`}
          >
            <div className="flex h-full w-full flex-col lg:gap-[22px] sm:gap-[18px] gap-[10px]">
              <div className="lg:h-[233px] sm:h-[250] h-[140px] w-full">
                <img
                  src={data?.newsRoomCards?.newsCardFour?.img}
                  alt="news1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex h-full flex-col  lg:gap-[50px] sm:gap-[30px] gap-[20px]">
                <div>
                  <p className={`line-clamp-2 rtl:font-TajawalMedium newsMainTitle`}>
                    {
                      data?.newsRoomCards?.newsCardFour
                        ?.content
                    }
                  </p>
                  
                  
                  <p className={`line-clamp-2 paragraph rtl:font-TajawalRegular mt-[10px] !text-[16px]`}>
                    {
                      data?.newsRoomCards?.newsCardFour
                        ?.desc
                    }
                  </p>
                </div>
                <p className={`newsCreatedDate font-poppinsRegular rtl:font-TajawalBold`}>
                  {data?.newsRoomCards?.newsCardFour?.date}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-1 flex-col lg:gap-[20px] sm:gap-0 ${data?.currentLang === "en" ? "lg:pl-[46px] sm:pl-0" : "lg:pr-[46px] sm:pr-0"}  lg:pt-[20px] sm:pt-[30px] pt-[20px]`}
          >
            {cardData?.map((value, index) => {
              return (
                <div
                onClick={()=>router.push(`${locale}/media-center/news-details/${value?.newsId}`)}

                  key={value.id}
                  className={`flex cursor-pointer lg:gap-[31px] sm:gap-[48px] gap-[27px] border-t-[1px] lg:border-t-0 border-[#DCDEE0] ${index !== cardData?.length - 1 ? "lg:border-b-[1px]" : ""} lg:pb-[20px] lg:pt-0  sm:pt-[22px] pt-[12.6px] ${index !== cardData?.length - 1 ? "sm:pb-[32px] pb-[20.4px]":"sm:pb-0 pb-0"}`}
                >
                  {" "}
                  <div className="flex w-full lg:max-w-[326px] lg:h-[146px] sm:h-[161px] h-[90px] max-w-full flex-col   justify-between">
                    <div className="h-[90px]">
                      <p className={`line-clamp-3 rtl:font-TajawalMedium newsListsTitle `}>
                        {value?.content}
                      </p>
                      <p className={`line-clamp-2 paragraph rtl:font-TajawalRegular mt-[10px] `}>
                    {
                      data?.newsRoomCards?.newsCardFour
                        ?.desc
                    }
                  </p>
                    </div>
                    <p className={`newsCreatedDate rtl:font-TajawalBold lg:pb-0 sm:pb-[16px] pb-0`}>
                      {value?.date}
                    </p>
                  </div>
                  <div className="w-full rounded-[6px]  lg:max-w-[239px] sm:max-w-[256px] sm:h-[161px] overflow-hidden max-w-[143.33px] h-[90px]">
                    <img
                      src={value?.img}
                      alt="news1" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default NewsRoom;
