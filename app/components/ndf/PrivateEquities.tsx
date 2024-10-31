import SimpleCardOne from "../cards/SimpleCardOne";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
import {setFontFamily} from "../../data/data"
import PrivateEquitiesSlider from "./PrivateEquitiesSlider"
const PrivateEquities = ({data}: any) => {
  const cardsStyling = {
    imgBgColor: "#FFFBF2",
    textBgColor: "#D8B97A",
    titleColor: "#FFFFFF",
    paraColor: "#FFFFFF",
  };

  const {cards} = data;


  return (
    <section className="private-equities-section lg:py-[100px] sm:pt-[60px] sm:pb-[50px] py-[40px]">
        <div className="flex flex-col lg:gap-[60px] sm:gap-[32px] gap-[16px]">
          <div className="">
            <SimpleHeadingandText data={data} />
          </div>
          <div className="lg:block hidden">
          <ScreenContainer>
          <div className="grid grid-cols-4 gap-x-[20px]">
            {cards?.map((data:any, index:number) => (
              <div
                key={data?.id}
                className="h-[350.21px] w-full max-w-[297px] overflow-hidden"
              >
                <SimpleCardOne data={data} imgBgColor={cardsStyling?.imgBgColor} textBgColor={cardsStyling?.textBgColor} titleColor={cardsStyling.titleColor} paraColor={cardsStyling.paraColor}  />
              </div>
            ))}
          </div>
          </ScreenContainer>
          </div>
          <div className="lg:hidden block">
              <PrivateEquitiesSlider data={cards}/>
            </div>
        </div>
    </section>
  );
};

export default PrivateEquities;
