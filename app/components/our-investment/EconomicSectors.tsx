"use client";
import EconomicAccordion from "../accordions/economic-accordion/EconomicAccordion";
import ScreenContainer from "../screencontainer/ScreenContainer";
const EconomicSectors = ({ data, locale }: any) => {
  return (
    <div className="mb-[100px]">
      <ScreenContainer>
        <div className="mt-[50px] flex w-full max-w-[988px] flex-col gap-[6px] md:gap-[33px] lg:gap-[24px]">
          <h2
            className={`mainHeading  rtl:font-TajawalBold`}
          >
            {locale === "en"
              ? "Economic Sectors"
              : "القطاعات الاقتصادية"}
          </h2>
          <p
            className={`paragraph rtl:font-TajawalRegular`}
          >
            {locale === "en"
              ? " Sultanate of Oman is a promising investment destination, focusing on diversifying its economy through investments in sectors that contribute to sustainable development and economic growth."
              : "تعد سلطنة عمان وجهة استثمارية واعدة، حيث تركز على تنويع اقتصادها عبر استثمارات في قطاعات حيوية تسهم في تحقيق التنمية المستدامة والنمو الاقتصادي."}
          </p>
        </div>
      </ScreenContainer>
      <ScreenContainer>
        <div className="mt-[50px]">
          <EconomicAccordion data={data} locale={locale} />
        </div>
      </ScreenContainer>
    </div>
  );
};

export default EconomicSectors;
