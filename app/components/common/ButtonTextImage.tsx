"use client";
import ScreenContainer from "../screencontainer/ScreenContainer";
import { downloadFile } from "@/app/data/data";

const ButtonTextImage: React.FC<any> = ({
  data,
  orderText = 1,
  orderImg = 2,
  marginY = "100px",
  isShowMarginYResp = true,
  isListShow = false,
  classesContainer = "",
}) => {
  const {
    title,
    img,
    paras,
    list,
    endPara,
    btn,
    paraHeading,
  } = data;
  const onButtonClick = () => {
    const pdfUrl =
      "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("target", "_blank"); // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${isShowMarginYResp && "sm:py-[60px] py-[40px]"}`

  return (
    <ScreenContainer>
      <div
        className={`about-text-with-img-container ${containerPaddingY || ""} ${classesContainer} flex flex-col items-start gap-[16px] sm:gap-[32px] lg:flex-row lg:gap-[70px] `}
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
            <h2 className="mainHeading rtl:font-TajawalBold">
              {title}
            </h2>
          )}

          <div className="flex flex-col gap-[15px]">
            {paraHeading && (
              <h3
                className={`subHeading rtl:font-TajawalBold`}
              >
                {" "}
                {data?.paraHeading}
              </h3>
            )}
            {paras &&
              paras.map((para: any, index: number) => {
                return (
                  <div key={index}>
                    <p
                      className={`paragraph rtl:font-TajawalRegular`}
                    >
                      {para}
                    </p>
                  </div>
                );
              })}
            {btn &&
              btn?.map((value: any, index: any) => {
                return (
                  <button
                    className="flex h-auto  w-full sm:w-[343px]  shrink-0 flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[10px] sm:px-[20px] py-[15px]"
                    onClick={()=>{downloadFile(value?.link)}}
                  >
                    <span
                      className={`cta  !text-white rtl:font-TajawalRegular`}
                    >
                      {value?.label}
                    </span>
                    <span>
                      <img
                        src={"/assets/icons/arrow-sq.svg"}
                        className="h-[18px] w-[18px] rotate-90 object-fill"
                        alt="arrow"
                      />
                    </span>
                  </button>
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
                      className={`rtl:font-GESndBookRegular relative flex flex-row gap-[4px] font-DINARegular text-[14px] font-normal leading-[20px] text-[#202020] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:bg-[#9F8555] before:content-[''] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[26px]`}
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
                      className={`rtl:font-GESndBookRegular font-DINARegular text-[14px] font-normal leading-[20px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[26px]`}
                    >
                      {para}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className="img-section h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[360px] lg:h-[425px] lg:max-w-[514px]"
          style={{ order: orderImg }}
        >
          {img && (
            <img
              src={img}
              alt={title}
              className={` h-full w-full object-contain `}
            />
          )}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default ButtonTextImage;
