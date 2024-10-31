"use client";
import "swiper/css";
import "swiper/css/pagination";
import {  A11y,  Autoplay,  FreeMode,  Navigation,} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgHoverTxtCard from "../common/ImgHoverTxtCard";
import ScreenContainer from "../screencontainer/ScreenContainer";
import useDarkMode from "@/app/hooks/useDarkMode";
// Helper function to split array into chunks of 3
const chunkArray = (array: any[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const BoardMembers: React.FC<any> = ({
  data,
  mainBgClass = "",
  cardsClass = "",
  isUseBgPattern=false,
}) => {
  // Split the cards into chunks of 3
  const cardRows = chunkArray(data?.card || [], 3);
  const isDark = useDarkMode() || false;
  const isShowBgPattern = isDark ? "/assets/images/pattern-polyg-b-img.png":"/assets/images/pattern-polyg-img.png";
  return (
    <div
      className={`py-[60px] lg:pb-[90px] lg:pt-[80px] ${mainBgClass} cursor-default bg-cover`}
      style={{
        backgroundImage: isUseBgPattern ? `url(${isShowBgPattern})` : undefined,
      }}
    >
      <ScreenContainer>
        <div className="hidden flex-col gap-[20px] lg:gap-[30px] lg:flex">
          <div>
            <h2 className="mainHeading rtl:font-TajawalBold">
              {data?.title}
            </h2>
          </div>
          <div className="flex flex-col gap-[30px]">
            {cardRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex flex-row gap-[24px] ${cardsClass}`}
              >
                {row.map((item: any, cardIndex: number) => (
                  <div key={cardIndex} className="">
                    <ImgHoverTxtCard data={item} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden md:block">
          
          <h2 className="mainHeading rtl:font-TajawalBold mb-[30px]">
            {data?.title}
          </h2>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={false}
            // width={"auto"}
            // freeMode={true}
            modules={[
              A11y,
              Navigation,
              FreeMode,
              Autoplay
            ]}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.9,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 10,
              }
            }}
            className=""
          >
            <div className="flex">
              {data?.card?.map((val:any,index:any)=>{
                return(
                  <SwiperSlide>
                    <ImgHoverTxtCard data={val} />
                  </SwiperSlide>
                )
              })}
            </div>
          </Swiper>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default BoardMembers;

// import ImgHoverTxtCard from "../common/ImgHoverTxtCard";
// import ScreenContainer from "../screencontainer/ScreenContainer";

// const BoardMembers: React.FC<any> = ({ data, mainBgClass="", cardsClass="justify-center" }) => {

//   return (
//     <div className={`py-[50px] lg:pb-[90px] lg:pt-[80px] ${mainBgClass} cursor-default`}>
//       <ScreenContainer>
//         <div className="flex flex-col gap-[50px]">
//           <div className="">
//             <h2 className="font-DINABold rtl:font-GESndBookBold lg:text-[36px] font-medium sm:font-bold lg:leading-[43.2px] text-[#9F8555] text-[20px] leading-[16.5px] sm:text-[31px] sm:leading-[31.04px]">
//               {data?.title}
//             </h2>
//           </div>
//           <div className={`flex flex-row  gap-[24px] ${cardsClass}`}>
//             {data?.card?.map((item: any, index: number) => (
//               <ImgHoverTxtCard key={index} data={item} />
//             ))}
//           </div>
//         </div>
//       </ScreenContainer>
//     </div>
//   );
// };

// export default BoardMembers;
