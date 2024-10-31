"use client";
import useDarkMode from "@/app/hooks/useDarkMode";
import ScreenContainer from "../screencontainer/ScreenContainer";
import { downloadFile } from "@/app/data/data";
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
  paraHeading?: string;
};

type TextWIthImgProps = {
  data: Data;
  orderText?: number;
  orderImg?: number;
  marginY?: string;
  isShowMarginYResp?: boolean;
};
const TextWIthImg: React.FC<any> = ({
  locale,
  data,
  orderText = 1,
  orderImg = 2,
  marginY = "100px",
  isShowMarginYResp = true,
  isListShow = false,
  classesContainer = "",
  listBold = false,
  swap = false, // what to swap order or image and text
}) => {
  const {
    title,
    img,
    paras,
    list,
    endPara,
    btn,
    paraHeading,
    listHeading,
  } = data;
  // const onButtonClick = () => {
  //   const pdfUrl =
  //     "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.setAttribute("target", "_blank"); // Open in new tab
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const isDark = useDarkMode();

  const containerPaddingY = `lg:py-[${marginY}] px-0 ${isShowMarginYResp && "sm:py-[60px] py-[40px]"}`



  return (
    <ScreenContainer>
      <div
        className={`${classesContainer} ${containerPaddingY || ""} flex flex-col items-start gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px] `}
        
        // sx={{
        //   "@media (min-width: 1024px)": {
        //     padding: `${marginY} 0 !important`,
        //   },
        //   "@media (min-width: 640px)": {
        //     padding: isShowMarginYResp ? "60px 0" : "0",
        //   },
        //   "@media (max-width: 639px)": {
        //     padding: isShowMarginYResp ? "40px 0" : "0",
        //   },
        // }}
      >
        <div
          className={`flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px] 
          ${swap ? `order-${orderText === 1 ? 2 : 1} lg:order-${orderText === 1 ? 1 : 2}` : `order-${orderText} lg:order-${orderText}`}`}

          //  className={`flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px] order-${ orderText===1?2:1}  lg:order-${orderText}`}

          // className={` flex w-full max-w-full  grow  flex-col justify-center  gap-[20px] lg:gap-[30px] order-1`}
          // style={{ order: orderText }}
        >
          {title && (
            <h2
              className={`mainHeading  rtl:font-TajawalBold`}
            >
              {title}
            </h2>
          )}

          <div
            className={`flex flex-col ${paraHeading ? "gap-[16px]" : ""}`}
          >
            {paraHeading && (
              <h3
                className={`subHeading !text-dbrown rtl:font-TajawalBold `}
              >
                {data?.paraHeading}
              </h3>
            )}
            {paras && (
              <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                {paras.map((para: any, index: number) => (
                  <div key={index} className="last:mb-0">
                    <p className="paragraph rtl:font-TajawalRegular">
                      {para}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {btn && (
              <button
                className="mt-[20px] flex h-auto w-[178px] shrink-0 flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[20px] py-[16px] lg:mt-[30px]"
                onClick={()=>{downloadFile(btn?.link)}}
              >
                <span className="paragraph !text-white rtl:font-TajawalRegular">
                  {btn?.label}
                </span>
                <span>
                  <img
                    src={"/assets/icons/pdf-icon.svg"}
                    className="h-[18px] w-[18px] object-fill rtl:rotate-180"
                    alt="arrow"
                  />
                </span>
              </button>
            )}

            {listHeading && (
              <div className="flex flex-col pt-[20px] lg:pt-[30px]">
                <h3
                  className={`paragraph !font-bold !text-black rtl:font-TajawalBold `}
                >
                  {" "}
                  {data?.listHeading}
                </h3>
              </div>
            )}
            {isListShow && list && (
              <ul
                className={`grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-1 lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px] ${listHeading || paras ? " mt-[20px] lg:mt-[30px]" : ""}`}
              >
                {list?.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="flex flex-row items-baseline gap-[12px]"
                  >
                    <span
                      className={`relative flex flex-row gap-[4px] ${
                        locale === "ar"
                          ? "before:left-auto before:right-[-16px]"
                          : "before:left-[-16px]"
                      } paragraph rtl:font-TajawalRegular ${
                        listBold ? "!font-bold" : ""
                      } before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full  bullets-col before:content-[''] `}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {endPara &&
              endPara?.map((para: any, index: number) => {
                return (
                  <div key={index}>
                    <p
                      className={`paragraph pt-[20px] text-[#202020] lg:pt-[30px] rtl:font-TajawalRegular  `}
                    >
                      {para}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className={`h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px] 
          ${swap ? `order-${orderImg === 1 ? 2 : 1} lg:order-${orderImg === 1 ? 1 : 2}` : `order-${orderImg} lg:order-${orderImg}`}`}

          // className={`h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px] order-${orderImg===1?2:1} lg:order-${orderImg} `}
          // style={{ order: orderImg }}
        >
          {img && (
            <img
              src={img}
              alt={title}
              className={` h-full w-full object-cover `}
            />
          )}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default TextWIthImg;
