"use client";

const Accordion = ({
  data,
  isOpen,
  onClick,
  locale,
  className,
}: any) => {
  const { title, paras, metaData, downloadDataset } =
    data || {};
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
    <div className={`${className} `}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between  py-[12px] sm:py-[20px] lg:py-[24px]"
      >
        <span
          className={`subHeading subHeadingFontClrBW !font-medium rtl:font-TajawalBold`}
        >
          {title}
        </span>
        {isOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1356_2123)">
              <path
                d="M27 10H-7"
                stroke="#CCCCCC"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1356_2123">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3209_18)">
              <path
                d="M27 10.1523H-7"
                stroke="#CCCCCC"
                stroke-width="2"
              />
              <path
                d="M10 -6.84766L10 27.1523"
                stroke="#CCCCCC"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_3209_18">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0.152344)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
      <div
        className={`grid overflow-hidden  transition-all duration-300 ease-in-out  ${
          isOpen
            ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-[16px] pb-[12px] sm:pb-[20px] md:gap-[20px] lg:gap-[24px] lg:pb-[24px]">
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
            <div className="flex flex-col lg:flex-row lg:gap-[77px]">
              <div className="border-col flex w-full max-w-[478px] flex-col gap-[30px] border-l-[1px] px-[20px] rtl:border-r-[1px]">
                <h4 className="subHeading subHeadingFontClrBW rtl:font-TajawalBold">
                  {metaData?.title}
                </h4>
                <ul className="flex flex-col gap-[21px] pl-[20px] rtl:pr-[20px]">
                  <li className="paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular rtl:before:left-auto rtl:before:right-[-16px]">
                    <span className="shrink-0">
                      <b>{metaData?.labelPD}</b>
                    </span>
                    <span className="">
                      {metaData?.publishDate}
                    </span>
                  </li>
                  <li
                    className="paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular rtl:before:left-auto rtl:before:right-[-16px]"
                  >
                    <span className="shrink-0">
                      <b>{metaData?.labelDO}</b>
                    </span>
                    <span className="">
                      {metaData?.dateOwner}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-col flex w-full max-w-[478px] flex-col gap-[30px] border-l-[1px] px-[20px] rtl:border-r-[1px]">
                <h4 className="subHeading subHeadingFontClrBW rtl:font-TajawalBold">
                  {downloadDataset?.title}
                </h4>
                {downloadDataset?.donwloadPdf && (
                  <ul className="flex flex-row gap-[20px]">
                    {downloadDataset?.donwloadPdf?.map(
                      (dataSet: any, index: number) => {
                        return (
                          <li
                            className="cursor-pointer"
                            key={index}
                            onClick={() =>
                              onButtonClick(dataSet?.link)
                            }
                          >
                            <img
                              src={dataSet?.src}
                              className=""
                            />
                          </li>
                        );
                      },
                    )}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
