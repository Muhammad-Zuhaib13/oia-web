"use client";
import ScreenContainer from "../common/ScreenContainer";
import PolygonBg from "../common/PolygonBg";
import { downloadFile } from "@/app/data/data";
const DownloadPdf = ({ data, locale ,style}: any) => {
  const testData = {
    desc: "This system is an important tool to ensure the integrity and effectiveness of the Oman Investment Authority and contributes to fostering a culture of accountability and responsibility among all employees of the Authority.",
    cta: {
      label: "Download PDF",
    },
  };
  const { desc, cta } = data;
  const onButtonClick = () => {
    const pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("target", "_blank"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={`w-full lg:py-[100px] py-[60px] ${style}`}>
      <ScreenContainer>
        <PolygonBg isShowPy={false}>
        <div className={`flex lg:flex-row flex-col lg:items-center justify-between  lg:gap-[100px] lg:px-[99px] lg:py-[60px] sm:py-[50px] py-[30px] sm:px-[24px] gap-[30px]  px-[20px]`}>
          {desc && (
            <div className="">
              <p                       className={`paragraph rtl:font-TajawalRegular`}
              >
                {desc}
              </p>
            </div>
          )}
          {cta && (
            <div className="">
              <button
                className="flex flex-row items-center justify-between lg:gap-[40px] sm:gap-[20px] gap-[25px] rounded-[4px] bg-[#7B6134] lg:px-[20px] lg:py-[16px] sm:p-[14px] p-[11px] h-auto lg:w-[216px] w-auto shrink-0"
                onClick={()=>{downloadFile(cta?.link)}}
              >
                <span                       className={`paragraph rtl:font-TajawalRegular !text-white`}
                >
                  {cta?.label}
                </span>
                <span>
                  <img
                    src={"/assets/icons/pdf-icon.svg"}
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

export default DownloadPdf;
