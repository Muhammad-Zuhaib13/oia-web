"use client";
import ScreenContainer from "../common/ScreenContainer";

const IPOSTable = ({ data, locale }: any) => {
  const { iposTable, tableHead } = data;
  return (
    <>
      <ScreenContainer className="!pb-[50px] !sm:pb-[60px] !lg:pb-[100px]">
        <div className="table-container w-full overflow-x-auto">
          <table className="w-[950px] lg:w-full">
            <thead className="theadBorder border-[1px]">
              <tr>
                <th className="tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold">
                  <span className="block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[1px] rtl:border-l-[1px]">
                    {tableHead?.typeInvestCol}
                  </span>
                </th>
                <th className="tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold">
                  <span className="block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[1px] rtl:border-l-[1px]">
                    {tableHead?.industryCol}
                  </span>
                </th>
                <th className="tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold">
                  <span className="block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[0px] rtl:border-l-[0px]">
                    {tableHead?.assetsCol}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="border-[1px] border-[#CCCCCC]">
              {iposTable?.map(
                (investment: any, index: number) =>
                  investment?.relatedIndustries?.map(
                    (
                      industry: any,
                      industryIndex: number,
                    ) =>
                      industry?.assets?.map(
                        (
                          asset: any,
                          assetIndex: number,
                        ) => (
                          <tr
                            key={`${index}-${industryIndex}-${assetIndex}`}
                            className="border-[1px] border-[#CCCCCC]"
                          >
                            {/* Display typeOfInvest only once per investment, spanning the required rows */}
                            {industryIndex === 0 &&
                              assetIndex === 0 && (
                                <td
                                  className="paragraph  border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium"
                                  rowSpan={investment.relatedIndustries.reduce(
                                    (
                                      acc: number,
                                      ind: any,
                                    ) =>
                                      acc +
                                      ind.assets.length,
                                    0,
                                  )}
                                >
                                  {investment.typeOfInvest}
                                </td>
                              )}
                            {/* Display industry once per industry, spanning the required rows */}
                            {assetIndex === 0 && (
                              <td
                                className="paragraph  border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium"
                                rowSpan={
                                  industry.assets.length
                                }
                              >
                                {industry.industry}
                              </td>
                            )}
                            <td className="paragraph flex justify-between p-[20px] rtl:font-TajawalMedium">
                              <span>{asset?.label}</span>
                              <img
                                src={asset?.src}
                                className=""
                              />
                            </td>
                          </tr>
                        ),
                      ),
                  ),
              )}
            </tbody>
          </table>
        </div>
      </ScreenContainer>
    </>
  );
};

export default IPOSTable;
