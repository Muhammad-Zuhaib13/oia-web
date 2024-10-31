import React from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import AnnualReportCard from "./AnnualReportCard";

const AnnualReportsCards = ({data}: any) => {
    const {title, description, reportCards} = data
    return (
      <section className="lg:mb-[100px] sm:mb-[50px] mb-[40px]">
        <div className="flex flex-col lg:gap-[100px] sm:gap-[32px] gap-[40px]">
          <div>
            <SimpleHeadingandText data={data} />
          </div>
          <div className="">
            <ScreenContainer>
              
              <div className="grid lg:grid-cols-3 lg:gap-x-[36px] lg:gap-y-[70px] sm:grid-cols-2 sm:gap-x-[20px] sm:gap-y-[30px] grid-cols-1 gap-y-[32px] gap-x-0">
                {reportCards?.map((item:any) => (
                  <React.Fragment key={item.id}>
                    <AnnualReportCard data={item} />
                  </React.Fragment>
                ))}
              </div>
            </ScreenContainer>
          </div>
        </div>
      </section>
    );
};

export default AnnualReportsCards;
