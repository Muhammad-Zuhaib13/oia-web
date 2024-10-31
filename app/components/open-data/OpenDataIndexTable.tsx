"use client";

import { downloadFile } from "@/app/data/data";
import PolygonBg from "../common/PolygonBg";
import ScreenContainer from "../common/ScreenContainer";
const OpenDataIndexTable = ({ data, locale }: any) => {
  if (data) {
    const { title, tableData, tableHead } = data;
    return (
      <PolygonBg>
        <ScreenContainer>
          <div className="flex flex-col gap-[30px]">
            {title && (
              <h2
                className={`section-heading font-DINABold rtl:font-TajawalBold`}
              >
                {title}
              </h2>
            )}
            <div className="w-full overflow-x-auto table-container">
              <table className="lg:w-full w-[950px]">
                <thead className="border-[1px] theadBorder">
                  <tr>
                    <th className="tabelHead relative h-[70px] w-[96px]  text-left rtl:text-right rtl:font-TajawalBold  ">
                      <span className="block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]">{tableHead?.srNo}</span>
                    </th>
                    <th className="tabelHead relative h-[70px] w-[335px] rtl:text-right rtl:font-TajawalBold text-left">
                      <span className="block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]">
                      {tableHead?.dataSet}
                      </span>
                    </th>
                    <th className="tabelHead relative h-[70px] w-[220px] text-left rtl:text-right rtl:font-TajawalBold">
                      <span className="block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]">{tableHead?.category}</span>
                    </th>
                    <th className="tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold">
                    <span className="block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]"> {tableHead?.datasetDes}</span>
                    </th>
                    <th className="tabelHead w-[229px] p-[20px] text-left lg:h-[70px] rtl:text-right rtl:font-TajawalBold">
                      {tableHead?.download}
                    </th>
                  </tr>
                </thead>
                {tableData && (
                  <tbody>
                    {tableData?.map(
                      (row: any, index: number) => {
                        return (
                          <tr key={index} className="">
                            <td className="paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium">
                              {row?.id}.
                            </td>
                            <td className="paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium">
                              {row?.dataSet}
                            </td>
                            <td className="paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium">
                              {row?.category}
                            </td>
                            <td className="border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium">
                              <ul className="px-[20px]">
                                {row?.dataSetDes?.map(
                                  (
                                    desc: any,
                                    index: number,
                                  ) => {
                                    return (
                                      <li
                                        key={index}
                                        className="paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalMedium rtl:before:left-auto rtl:before:right-[-16px] "
                                      >
                                        {desc?.content}
                                      </li>
                                    );
                                  },
                                )}
                              </ul>
                            </td>
                            <td className="border-[1px] border-[#CCCCCC] p-[20px]">
                              {row?.downloadData?.map(
                                (
                                  down: any,
                                  index: number,
                                ) => {
                                  return (
                                    <button
                                      className="justify-center] flex flex-row items-center gap-[13px]"
                                      onClick={() => {
                                        downloadFile(
                                          down?.link,
                                        );
                                      }}
                                    >
                                      <span className="paragraph shrink-0 rtl:font-TajawalMedium">
                                        {down?.label}
                                      </span>
                                      <span className="shrink-0">
                                        <img
                                          src={down?.src}
                                        />
                                      </span>
                                    </button>
                                  );
                                },
                              )}
                            </td>
                          </tr>
                        );
                      },
                    )}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </ScreenContainer>
      </PolygonBg>
    );
  } else {
    <></>;
  }
};

export default OpenDataIndexTable;
