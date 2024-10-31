"use client";
import DetailedAccordion from "@/app/components/common/DetailedAccordion";
import HighLightsSection from "@/app/components/common/HighlightsSection";
import ScreenContainer from "@/app/components/screencontainer/ScreenContainer";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import { setFontFamily } from "../../../data/data";
import NewsHighlights from "@/app/components/common/NewHighLightSection";
import Governments from "@/app/components/about/Governments";

const aboutFund = {
  title: "About The Fund",
  paras: [
    "The investments of the authority include those outside the Sultanate of Oman, primarily aimed at achieving sustainable financial returns by focusing on long-term investments to benefit the well-being of future generations.",
    "It includes",
  ],
  list: [
    "More than 185 investment funds in private equity, real estate, venture capital,nd infrastructure.",
    "More than 60 direct investments in various sectors, in addition to stocks, bonds, treasury bills, and deposits in different global markets.",
  ],
  img: "/assets/images/future-generation-fund/about-fund.jpg",
};
const newTwoDataTextWithImg = {
  title: "Global Footprint",
  paras: [
    "The authority's investments are distributed across more than 50 countries worldwide. The geographical distribution of the authority’s investments until the end of 2023 shows that the largest share, 60.8%, is for investments within the Sultanate of Oman (National Development Portfolio), while the remaining 30.2% is distributed outside the Sultanate as follows:",
  ],
  list: [
    "North America: 19.8%",
    "Europe: 10.4%",
    "Asia and Pacific Rim countries: 3.9%",
    "Other countries: 1.5%",
    "Middle East and North Africa: 1.3%",
    "Emerging Europe and Central Asia: 1.3%",
    "Latin America: 0.8%",
    "Africa: 0.2%",
  ],
  img: "/assets/images/future-generation-fund/global-footprint.jpg",
};

const newDataHightlights = {
  title: "Public Markets ",
  subTitle:"(Stocks, Bonds, and Multi-Asset)",
  paras:["Public markets invest in securities and tradable instruments that can be converted into liquidity, including global equities, local stocks, global bonds, multi-asset portfolios, and short-term assets, in addition to investing with external asset managers across various asset classes. In 2023, public markets achieved returns that exceeded expectations, reaching 9.8% compared to the targeted return of 5% for the generations portfolio, attributed to the exceptional performance of global equity markets, supported by promising prospects for the artificial intelligence sector and positive financial results for listed companies."],
  mainImg:
    "/assets/images/future-generation-fund/public-market.jpg",
    cards:[
      {id:1,
        cardTitle:'Global Equity Portfolio:',
        cardParas:["The Omani Investment Authority's global equity portfolio invests in 50 countries distributed across North America, Europe, Asia Pacific, and emerging markets, which diversifies investments and distributes portfolio risks."],
        list:[]
      },
      {id:2,
        cardTitle:'Global Bond Portfolio:',
        cardParas:["Invests in high-quality sovereign instruments related to governments in nearly 35 bond markets worldwide, in both developed and emerging countries, primarily to provide investments with returns at low-risk rates."], list:[]
      },
      {id:3,
        cardTitle:'Short-term Asset Investments:',
        cardParas:["Considered safe investment instruments that maintain liquidity levels, such as U.S. treasury bills, sovereign sukuk, corporate deposits, and deposits with local banks."],
        list:[]
      }
    ],
   
 
};
const governmentData = {
  title: "Governments ",
  subTitle:"(Joint Ventures)",
  paras:["Strategic Partnerships with Friendly Countries."],
  mainImg:
    "/assets/images/future-generation-fund/government.jpg",
    cards:[
      {id:1,
        logo:'/assets/images/future-generation-fund/ovi-logo.svg',
        cardTitle:'Vietnam Oman Investment (VOI)',
        cardParas:["Established in 2008 in partnership with the Vietnam General Investment Authority, with an initial capital of $75 million, later increased by $125 million. Read more..."],
        list:[]
      },
      {id:2,
        logo:'/assets/images/future-generation-fund/oman-india-logo.svg',

        cardTitle:'Oman-India Investment Fund',
        cardParas:["Founded in 2011 in partnership with the State Bank of India, it initially invested $100 million in various sectors within India and has allocated $240 million currently invested in several sectors. "], list:[]
      },
      {id:3,
        logo:'/assets/images/future-generation-fund/oam-uzbek-logo.svg',

        cardTitle:'Oman-Uzbekistan Investment Company',
        cardParas:["A joint project with the Uzbekistan Reconstruction and Development Fund; it invests in Uzbekistan with an initial capital of $100 million, later increased to $200 million in 2017."],
        list:[]
      },
      {id:4,
        logo:'/assets/images/future-generation-fund/oman-brunel-logo.svg',

        cardTitle:'Oman-Brunei Investment Company',
        cardParas:["Founded in 2009 in partnership with the Brunei Investment Agency, with an initial capital of $100 million, increased to $200 million in 2019. Read more..."],
        list:[]
      },
      {id:4,
        logo:'/assets/images/future-generation-fund/oman-spain-logo.svg',

        cardTitle:'Oman-Spain Private Equity Fund',
        cardParas:["Founded in 2014 with a capital of €200 million, resulting from a distinguished partnership between the Omani Investment Authority and the government-owned Spanish company COFIDES, Read more..."],
        list:[]
      },
      {id:4,
        logo:'/assets/images/future-generation-fund/oman-china-logo.svg',

        cardTitle:'International Commercial Bank of China',
        cardParas:["Established in 2020 in partnership with the International Commercial Bank of China. The fund's capital exceeds $300 million and targets investment in various Chinese sectors, Read more..."],
        list:[]
      },
      {id:4,
        logo:'/assets/images/future-generation-fund/oman-pak-logo.svg',

        cardTitle:'Pak Oman Investment Company',
        cardParas:["Established in 2001 through an agreement between the governments of the Sultanate and Pakistan, with an initial capital of $100 million.  Read more..."],
        list:[]
      },
      {id:4,
        logo:'/assets/images/future-generation-fund/al-husn-logo.svg',

        cardTitle:'Al-Husn Investment Company',
        cardParas:["A Qatari-Omani company established in 2007 with a total capital of OMR 100 million. The company targets investment in key economic sectors within the Sultanate and GCC countries, Read more..."],
        list:[]
      }
    ],
   
 
};
const FutureGeneral: React.FC<any> = ({ locale, data }) => {
  return (
    <main>
      <TextWIthImg
        data={aboutFund}
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
      <div className="bg-[url('/assets/images/sultanate-oman-imgs/maritime-trade-route-bg-img.png')] bg-cover py-[40px] sm:py-[50px] lg:py-[100px]">
        <TextWIthImg
          data={newTwoDataTextWithImg}
          orderText={2}
          orderImg={1}
          marginY="0px"
          isListShow={true}
          isShowMarginYResp={false}
        />
      </div>
        <NewsHighlights
          locale={locale}
          data={newDataHightlights}
          classNameContainer=""
        />


      <div className="bg-[url('/assets/images/pattern-polyg-img.png')] bg-cover py-[100px]">
        <ScreenContainer>
          <div className="mb-[50px] flex flex-col gap-[20px] sm:gap-[32px] lg:gap-[24px]">
            <div className="">
              <h2
                className={`font-DINABold text-[20px] font-medium leading-[16.5px] text-[#9F8555] sm:text-[31px] sm:font-bold  sm:leading-[31.04px] lg:text-[40px] lg:leading-[43.2px] rtl:font-GESndBookBold`}
              >
                Private Markets{" "}
                <span className="!text-[36px] capitalize">
                  (Real Estate, Funds, and Direct
                  Investments)
                </span>
              </h2>
            </div>

            <p
              className={`${setFontFamily(data?.locale || "en", "medium")} text-[14px] font-medium leading-[20px] text-[#202020]  sm:text-[24px] sm:leading-[38.16px] lg:text-[18px] lg:leading-[27px]`}
            >
              Private market investments include
              non-tradable assets and consist of real estate
              portfolio investments, private equity
              investments, and investment funds.
            </p>
          </div>
          <DetailedAccordion data={data} />
        </ScreenContainer>
      </div>
      <Governments     locale={locale}
          data={governmentData}/>
          
    </main>
  );
};
export default FutureGeneral;
