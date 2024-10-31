import { Image } from "antd";
import ScreenContainer from "../screencontainer/ScreenContainer";
import {setFontFamily} from "../../data/data"
const InvestmentGrid = ({data}:any) => {
    const {
        cardOne,
        cardTwo,
        cardThree,
        cardFour,
        cardFive,
        cardSix,
        locale
      } = data;
    
    return (
        <>
            {/* Desktop View */}
            <div className="lg:mt-[70px] lg:block hidden">
            <div className="investmentGridWrapper  ">
                <div className="topRow">
                    <div className="topLeftCol">
                        <img src={cardOne?.src} alt="direct investment"/>
                    </div>
                    <div className="topRightCol flex-col">
                        <p className={`investmentType ${setFontFamily(locale, "medium")}`}>{cardTwo.title}</p>
                        <p className="investmentPercentage font-poppinsMedium">{cardTwo.percent}</p>
                    </div>
                </div>
                <div className="bottomRow">
                    <div className={`boxCol flex flex-col justify-between figureBox ${locale==="en"? "items-end" : "items-start"}`}>
                        <p className={`investmentType ${setFontFamily(locale, "medium")}`}>{cardThree.title}</p>
                        <p className="investmentPercentage font-poppinsMedium">{cardThree.percent}</p>
                    </div>
                    <div className="boxCol imgBox">
                        <img src={cardFour.src} alt="sme"/>
                    </div>
                    <div className={`boxCol figureBox ${locale==="en"? "items-end" : "items-start"}`}>
                        <p className={`investmentType ${setFontFamily(locale, "medium")}`}>{cardFive.title}</p>
                        <p className="investmentPercentage font-poppinsMedium">{cardFive.percent}</p>
                    </div>
                    <div className="boxCol imgBox">
                        <img src={cardSix.src} alt="startups"/>
                    </div>
                </div>
            </div>
            </div>
            {/* Tablet & Mobile View */}
            <div className="lg:hidden sm:mt-[60px] mt-[32px]">
                <div className="flex w-full flex-wrap sm:flex-nowrap justify-between border-b-0 sm:border-b-[1px] sm:border-[#C2C2C2]">
                    <div className={`${locale === "en" ? "borderBetween":"borderBetween-ar"} w-full sm:w-[49%] flex flex-col items-center mb-[32px] pb-[30px] sm:pb-[0px] sm:border-b-0 border-b-[1px] sm:border-[#C2C2C2]`}>
                        <p className="investmentPercentage font-poppinsSemiBold !text-[32px] !font-semibold !leading-[38px] mb-[20px]">{cardTwo.percent}</p>
                        <p className={`investmentType ${setFontFamily(locale, "medium")} !text-[18px] !font-medium !leading-[18px]`}>{cardTwo.title}</p>
                    </div>
                    <div className="w-full sm:w-[49%] flex flex-col items-center mb-[32px] pb-[30px] sm:pb-[0px] sm:border-b-0 border-b-[1px] sm:border-[#C2C2C2]">
                        <p className="investmentPercentage font-poppinsSemiBold !text-[32px] !font-semibold !leading-[38px] mb-[20px]">{cardThree.percent}</p>
                        <p className={`investmentType ${setFontFamily(locale, "medium")} !text-[18px] !font-medium !leading-[18px]`}>{cardThree.title}</p>
                    </div>
                </div>
                <div className="flex w-full justify-center sm:mt-[32px] mt-[0px]">
                    <div className="flex flex-col items-center">
                        <p className="investmentPercentage font-poppinsSemiBold !text-[32px] !font-semibold !leading-[38px] mb-[20px]">{cardFive.percent}</p>
                        <p className={`investmentType ${setFontFamily(locale, "medium")} !text-[18px] !font-medium !leading-[18px]`}>{cardFive.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestmentGrid;