"use client";


const AnnualReportCard: React.FC<any> = ({ data }: any) => {
  const { imgSrc, title, locale, link } = data;
  const onButtonClick = (fileUrl: string) => {
    if (!fileUrl) {
      console.error("File URL is undefined or null");
      return;
    }
    const linkElement = document.createElement("a");
    linkElement.href = fileUrl;
    const fileName = fileUrl.split("/").pop() || "file.pdf"; 
    linkElement.setAttribute("download", fileName); 
    linkElement.click();
  };
  return (
    <div className="flex h-auto w-full cursor-pointer flex-col justify-between gap-[20px] lg:h-[346px] lg:max-w-[394px] lg:gap-[30px]" onClick={()=>onButtonClick(link)}>
      <div className="relative flex h-[260px] flex-col items-center justify-center overflow-hidden bg-[#FEFAEF] py-[50px] sm:px-[61px] sm:py-[68px] lg:h-[300px] lg:px-[48px] lg:pb-[66px] lg:pt-[60px]">
        <div className="h-full w-full max-w-[212px] ">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={title || ""}
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <div
          className={`absolute  ${locale === "en" ? "right-[20px]" : "left-[20px]"} top-[20px] h-[34px] w-[28px] lg:h-[45px] lg:w-[37px]`}
        >
          <img
            src="/assets/icons/download-pdf-icon.svg"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
      {title && (
        <div>
          <h3 className={`publicationsYear`}>{title}</h3>
        </div>
      )}
    </div>
  );
};

export default AnnualReportCard;
