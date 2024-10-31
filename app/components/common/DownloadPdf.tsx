"use client";
import ScreenContainer from "./ScreenContainer";
import PolygonBg from "./PolygonBg";
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
    link.setAttribute("target", "_blank"); // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={`w-full py-[100px] ${style}`}>
      <ScreenContainer>
        <div className="flex flex-row items-center justify-between gap-[100px] bg-[url('/assets/images/pattern-polyg-img.png')] bg-cover px-[99px] py-[60px]">
          {desc && (
            <div className="">
              <p className="text-[18px] leading-[22px] text-[#303030]">
                {desc}
              </p>
            </div>
          )}
          {cta && (
            <div className="">
              <button
                className="flex flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[20px] py-[16px] h-auto w-[216px] shrink-0"
                onClick={onButtonClick}
              >
                <span className="text-[18px] leading-[22px] text-[#FFFFFF]">
                  {cta?.label}
                </span>
                <span>
                  <img
                    src={"/assets/icons/pdf-icon.svg"}
                    className="h-[18px] w-[18px] object-fill rtl:rotate-180"
                    alt="arrow"
                  />
                </span>
              </button>
            </div>
          )}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default DownloadPdf;
