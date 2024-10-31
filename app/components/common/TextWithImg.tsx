"use client";
import ScreenContainer from "./ScreenContainer";
type Paragraph = {
  id: number;
  text: string;
  subHeading?: string;
  text2?: string;
  locale?: string;
};

type Data = {
  src: string;
  alt: string;
  title: string;
  locale?: string;
  paragraphs: Paragraph[];
};

type TextWIthImgProps = {
  data: Data;
  orderText?: number;
  orderImg?: number;
  marginY?: string;
  isShowMarginYResp?: boolean;
};
const TextWIthImg: React.FC<any> = ({
  data,
  orderText = 1,
  orderImg = 2,
  marginY = "100px",
  isShowMarginYResp = true,
  isListShow = true,
  classesContainer=""
}) => {
  const { title, img, paras, list } = data;
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${isShowMarginYResp && "sm:py-[60px] py-[40px]"}`

  return (
    <ScreenContainer>
      <div
        className={`about-text-with-img-container ${containerPaddingY || ""} ${classesContainer} flex flex-col items-start gap-[16px] sm:gap-[32px] lg:!flex-row lg:gap-[70px] `}
        // sx={{
        //   "@media (min-width: 1024px)": {
        //     padding: `${marginY} 0 !important`,
        //   },
        //   "@media (min-width: 640px)": {
        //     padding: isShowMarginYResp ? "50px 0" : "0",
        //   },
        //   "@media (max-width: 639px)": {
        //     padding: isShowMarginYResp ? "40px 0" : "0",
        //   },
        // }}
      >
        <div
          className={`text-section flex w-full max-w-full  grow  flex-col justify-center  gap-[16px] sm:gap-[32px] lg:gap-[40px]`}
          style={{ order: orderText }}
        >
          {title && (
            <h2
              className={`section-heading font-DINABold rtl:font-TajawalBold`}
            >
              {title}
            </h2>
          )}
          <div className="flex flex-col gap-[15px]">
            {paras &&
              paras.map((para: any, index: number) => {
                return (
                  <div key={index}>
                    <p
                      className={`paragraph text-[#202020] rtl:font-TajawalRegular`}
                    >
                      {para}
                    </p>
                  </div>
                );
              })}
            {isListShow && list && (
              <ul className="disc-br flex flex-col  gap-[15px] ltr:pl-[20px] rtl:pr-[20px]">
                {list.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="flex flex-row items-baseline gap-[12px]"
                  >
                    <span
                       className={`relative flex  flex-row gap-[4px] font-DINARegular font-normal before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-['']  rtl:font-TajawalRegular paragraph`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div
          className="img-section rounded-[6px] h-[200px] w-full max-w-full sm:h-[360px] lg:h-[425px] lg:max-w-[514px] overflow-hidden"
          style={{ order: orderImg }}
        >
          {img && (
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default TextWIthImg;
