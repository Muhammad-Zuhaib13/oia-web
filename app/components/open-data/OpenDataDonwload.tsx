"use client";
import PolygonBg from "../common/PolygonBg";
import ScreenContainer from "../common/ScreenContainer";

const OpenDataDonwload = ({ data, locale, style }: any) => {
  const { cta, paras, list } = data;
  const onButtonClick = () => {
    const pdfUrl =
      "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`w-full py-[60px] lg:py-[100px] ${style}`}
    >
      <ScreenContainer>
        <PolygonBg isShowPy={false}>
          <div
            className={`flex flex-col justify-between gap-[30px] px-[20px]  py-[30px] sm:px-[24px] sm:py-[50px] lg:flex-row lg:items-center lg:gap-[100px] lg:px-[99px]  lg:py-[60px]`}
          >
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
              {list && (
                <ul className="disc-br flex flex-col  gap-[15px] ltr:pl-[20px] rtl:pr-[20px]">
                  {list.map((item: any, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row items-baseline gap-[12px]"
                    >
                      <span
                        className={`bullets-col paragraph  relative flex flex-row gap-[4px] font-DINARegular font-normal before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full  before:content-[''] rtl:font-TajawalRegular`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cta && (
              <div className="">
                <button
                  className="flex h-auto w-max shrink-0 flex-row items-center justify-between gap-[25px] rounded-[4px] bg-[#7B6134] p-[11px] sm:gap-[20px] sm:p-[14px] lg:gap-[40px] lg:px-[20px] lg:py-[16px]"
                  onClick={onButtonClick}
                >
                  <span
                    className={`paragraph !text-white rtl:font-TajawalRegular`}
                  >
                    {cta?.label}
                  </span>
                  <span>
                    <img
                      src={"/assets/icons/pdf-down.svg"}
                      className="h-[18px] w-[18px] object-fill "
                      alt="arrow"
                    />
                  </span>
                </button>
              </div>
            )}
          </div>
        </PolygonBg>
      </ScreenContainer>
    </div>
  );
};

export default OpenDataDonwload;
