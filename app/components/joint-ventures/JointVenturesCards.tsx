import React from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import JointVentureCard from "./JointVentureCard";

const JointVenturesCards = ({data}: any) => {
  const {title, para, locale ,cards} = data
  return (
    <div className="h-auto w-full bg-[#FFF9EC] lg:pb-[70px] lg:pt-[100px] sm:py-[42px] sm: py-[40px]">
      <div className="flex flex-col lg:gap-[50px] sm:gap-[32px] gap-[24px]">
          <div>
            <SimpleHeadingandText data={data}/>
          </div>
          <ScreenContainer>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-y-[50px] lg:gap-x-[20px] sm:gap-y-[40px] sm:gap-x-[21px] gap-y-[21px]">
            {cards?.map((data:any, index:number) => (
              <React.Fragment key={data?.id}>
                <JointVentureCard data={data} />
              </React.Fragment>
            ))}
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default JointVenturesCards;
