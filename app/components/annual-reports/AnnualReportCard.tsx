"use client"
import { Image } from "antd";
import {setFontFamily} from "../../data/data"
type Data = {
  id: number;
  title: string;
  src: string;
  locale?:string;
};

type AnnualReportCardProps = {
  data: Data;
};

const onButtonClick = () => {
  const pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("target", "_blank"); // Open in new tab
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const AnnualReportCard: React.FC<AnnualReportCardProps> = ({data}: any) => {
  return (
    <div className="flex lg:h-[346px] h-auto w-full lg:max-w-[394px] flex-col justify-between lg:gap-[30px] gap-[20px]">
      <div className="lg:h-[300px] h-[260px] overflow-hidden bg-[#FEFAEF] lg:px-[48px] sm:px-[61px] lg:pb-[66px] lg:pt-[60px] sm:py-[68px] py-[50px] flex flex-col justify-center items-center relative">
      <div className="h-full max-w-[212px] w-full " >
        <img
          src={data?.imgSrc}
          alt={data?.title}
          className="w-full h-full object-contain"
        />
        </div>
        <div className={`lg:w-[37px] lg:h-[45px] w-[28px] h-[34px] absolute top-[20px] ${data?.locale==="en" ? "right-[20px]":"left-[20px]"}`} onClick={onButtonClick}>
          <img src="/assets/icons/download-pdf-icon.svg" alt="pdf" className="object-cover w-full h-full " />
        </div>
      </div>
      <div>
        <h3 className={`line-clamp-1 ${setFontFamily(data?.locale || "en","bold")} font-bold lg:text-[24px] sm:text-[20px] sm:leading-[24px] text-[16px] leading-[19px] capitalize lg:leading-[29px] text-[#202020]`}>
          {data.title}
        </h3>
      </div>
    </div>
  );
};

export default AnnualReportCard;
