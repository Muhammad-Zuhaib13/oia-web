import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import FutureGeneral from "./future-general-funds";

const FutureGeneralFund: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("   ");
  const accordData = [
    {
      id: 1,
      title: "Real Estate",

      paras: [
        "Investing in various categories of real estate is a good sector, as it has the advantage of preserving capital and providing long-term returns. Real estate investments are selected considering the needs of each market individually, diversifying between residential, commercial, or tourism real estate investments. The real estate investment department of the authority works on diversifying its portfolio between core assets, value-added investments, real estate development investments, and real estate investment funds.",
      ],
      image:
        "/assets/images/future-generation-fund/real-estate-accordion.jpg",
      list: [
        {
          title: "Core Assets",
          para: [
            "Direct investments in developed markets through long-term leases aimed at achieving sustainable income and do not require permanent management by the authority.",
          ],
          subList: [
            
          ],
        },

        {
          title: "Value-Added Investments",
          para: [
            "The authority partners with real estate developers in both developed and emerging markets.",
          ],
          subList: [
           
          ],
        },
        {
          title: "Real Estate Development Investments",
          para: [
            "Direct investments made by the Omani Investment Authority.",
          ],
          subList: [
           
          ],
        },
        {
          title: "Real Estate Investment Funds",
          para: [
            "Indirect investments in large real estate funds managed by experts in the field.",
          ],
          subList: [
           
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Investment Funds",
      paras: [
        "In 2023, the authority invested in 13 funds across various sectors:",
      ],
      image: "",
      list: [
        {
          title: "Core Assets",
          para: [],
          subList: [
            {
              heading: "Platinum:",
              content:
                "Targets industries and chemicals and distribution in the United States.",
            },
            {
              heading: "Verdin:",
              content:
                "Focuses on technology companies in Northern Europe.",
            },
            {
              heading: "Alpin:",
              content:
                "Acquires software and services companies in the United States.",
            },
            {
              heading: "American Industrial Partners:",
              content:
                "Targets industrial companies in the United States.",
            },
            {
              heading: "Playground:",
              content:
                " Focuses on advanced technologies such as artificial intelligence and automation.",
            },
            {
              heading: "Five Way:",
              content:
                "Focuses on consumer innovation and information technology in China.",
            },

          ],
        },
        {
          title: "Infrastructure Sector",
          para: [],
          subList: [
            {
              heading: "Antin Infrastructure Partners:",
              content:
                "Invests globally in infrastructure projects.",
            },
            {
              heading: "Global Infrastructure Fund (GIP):",
              content:
                " Invests in infrastructure across several continents.",
            },
          ],
        },
        {
          title: "Healthcare Sector",
          para: [],
          subList: [
            {
              heading: "Windrose:",
              content:
                "Targets companies operating in healthcare services in the United States.",
            },
          ],
        },

        {
          title: "Other Sectors",
          para: [],
          subList: [
            {
              heading: "Valor:",
              content:
                "Invests in consumer products, engineering products, and business services in the United States.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Diverse Direct Investments",
      paras: [
        "In 2023, the authority added diverse direct investments, primarily focused on green technology and innovation. Notable investments include:",
      ],
      image: "",
      list: [
        {
          title: "Ornikest Energy, Jurata, Electric Hydrogen, and Hyasta:",
          para: ["U.S. and Australian companies working in renewable energy, battery technology, and green hydrogen. The Sultanate of Oman has signed cooperation agreements with them to develop and localize these technologies."],
          subList: [
            
            
          ],
        },
        {
          title: "Energy Dome:",
          para: ["An Italian company offering innovative solutions for energy storage."],
          subList: [
          
          ],
        },
        {
          title: "E-Mashrif:",
          para: ["An Omani startup providing innovative solutions for student safety monitoring in school buses."],
          subList: [
           
          ],
        },

        {
          title: "These investments focused on:",
          para: [],
          subList: [
            {
              heading: "Renewable Energy:",
              content:
                "Developing technologies for energy storage and green hydrogen production.",
            },
            {
              heading: "Biotechnology:",
              content:
                "Developing innovative solutions for preserving vaccines and biological materials.",
            },
            {
              heading: "Local Innovation:",
              content:
                "Supporting Omani startups and encouraging innovation.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <FutureGeneral locale={locale} data={accordData} />
    </>
  );
};
export default FutureGeneralFund;
