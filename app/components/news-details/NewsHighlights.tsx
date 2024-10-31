"use client";
import useDarkMode from "@/app/hooks/useDarkMode";
import { Link } from "@/i18n.config";
import ScreenContainer from "../common/ScreenContainer";
type Paragraph = {
  id: number;
  text: string;
};

type HighlightsData = {
  title: string;
  para: Paragraph[];
};

type PointsData = {
  title: string;
  points: Paragraph[];
};

type SocialLinks = {
  id: number;
  src: string;
  link: string;
  alt: string;
};
const NewsHighlights: React.FC<any> = ({
  data,
  locale,
}) => {
  const socialLinks: SocialLinks[] = [
    {
      id: 1,
      src: "/assets/icons/fb-icon-news.svg",
      link: "https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d",
      alt: "Facebook",
    },
    {
      id: 2,
      src: "/assets/icons/x-color-icon.svg",
      link: "https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww",
      alt: "LinkedIn",
    },
    {
      id: 3,
      src: "/assets/icons/in-color-icon.svg",
      link: "https://www.linkedin.com/company/oman-investment-authority",
      alt: "LinkedIn",
    },
  ];
  const isDark = useDarkMode();
  const { title, date, paras, image, share, btnText } =
    data || {};
  return (
    <div className="news-highlights-section pb-[40px] sm:pb-[50px] lg:pb-[100px]">
      <ScreenContainer>
        <div className="bread mb-[60px] mt-[21px] lg:mb-[100px]">
          <ul className="flex flex-row items-center gap-[30px]">
            <li className="news-breadcrumb relative flex flex-row  items-end gap-[10px] cursor-default  font-DINAMedium  font-medium rtl:font-TajawalMedium">
              <span>
                {locale === "en"
                  ? " Media Center"
                  : "المركز الإعلامي"}
              </span>
              <span className="rtl:rotate-180">
                <img src="/assets/icons/chevron-right-dark.svg" style={{filter: isDark ? "invert(1)" : ""}} alt="chevron" />
              </span>
            </li>
            <li className="news-breadcrumb relative flex flex-row gap-[10px] items-end font-DINAMedium font-medium rtl:font-TajawalMedium">
              <Link href="/media-center/news">
                {locale === "en"
                  ? "News Room"
                  : "أخبار الجهاز"}
              </Link>
              <span className="rtl:rotate-180">
                <img src="/assets/icons/chevron-right-dark.svg" style={{filter: isDark ? "invert(1)" : ""}} alt="dark-chevron" />
              </span>
            </li>
            <li className="news-breadcrumb news-breadcrumb-active cursor-default font-DINABold  font-bold  underline rtl:font-TajawalBold">
              {locale === "en"
                ? " News Details"
                : "الأخبار"}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] sm:gap-[32px] lg:gap-[70px]">
          <div className="flex flex-col sm:gap-[32px] lg:gap-[50px]">
            <div className="flex flex-col gap-[15px]">
              <h2 className="sectionTitle w-[90%] text-[#9F8555] rtl:font-TajawalBold">
                {title}
              </h2>
              <h5 className="paragraph !font-medium text-[#202020] rtl:font-TajawalBold">
                {date}
              </h5>
            </div>
            {image && (
              <div className="h-[400px] w-full overflow-hidden rounded-[6px]">
                <img
                  src={`${image}`}
                  className="h-full w-full rounded-[6px] object-cover"
                />
              </div>
            )}
            {paras && (
              <div className="flex  w-full shrink-0 flex-col gap-[15px]">
                {paras.map((para: any, index: number) => (
                  <div key={index}>
                    <p className="paragraph text-justify text-[#202020] rtl:font-TajawalRegular">
                      {para}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative h-[56px] w-full  max-w-[756px]">
            <div className="h-full w-full">
              <input
                type="text"
                placeholder={
                  locale === "en" ? "Your Email" : ""
                }
                className={`news-details-input h-full w-full border-b-[1px] border-[#ABABAB] bg-transparent font-DINAMedium text-[18px] font-medium leading-[21.8px] placeholder:font-DINABold placeholder:text-[18px] placeholder:font-bold focus:outline-none sm:placeholder:text-[20px] lg:placeholder:text-[36px]`}
              />
            </div>
            <div
              className={`absolute ${locale === "en" ? "right-0" : "left-0"}  top-[5px] sm:top-0`}
            >
              <button className="flex h-[48px] w-auto cursor-default flex-row items-center gap-[12px] font-bold">
                <span
                  className={`rtl:font-GESndBookBold font-DINABold text-[12px] font-bold leading-[10px] text-[#9F8555] sm:text-[16px] sm:leading-[18px] lg:text-[18px]  lg:leading-[22px]`}
                >
                  {btnText}
                </span>
                <span
                  className={`btn-circle-hover flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-[#594226] sm:h-[30px] sm:w-[30px] lg:h-[48px] lg:w-[48px]`}
                >
                  <img
                    src="/assets/icons/chervon-left-white.svg"
                    className={`relative z-10 h-[7px] w-[4px] sm:h-[9px] sm:w-[6px] lg:h-[14px] lg:w-[9px] rtl:rotate-180`}
                    alt="submit"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h4
              className={`rtl:font-GESndBookBold font-DINABold text-[18px] font-bold uppercase leading-[14px] text-[#848484] sm:text-[20px] sm:leading-[14px] lg:text-[18px] lg:leading-[14px]`}
            >
              {locale === "en" ? "Share" : "share"}
            </h4>
            <div className="">
              <ul className="flex flex-row gap-[8px] sm:gap-[12px] lg:gap-[16px]">
                {socialLinks?.map((data) => (
                  <li
                    key={data?.id}
                    className="flex h-[24px] w-[24px] flex-col items-center justify-center rounded-full bg-[#ECF4FF] sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]"
                  >
                    <Link href={data?.link} target="_blank" rel="noopener noreferrer" >
                      <img
                        src={data?.src}
                        alt={data?.alt}
                        className="h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] lg:h-[20px] lg:w-[20px]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default NewsHighlights;
