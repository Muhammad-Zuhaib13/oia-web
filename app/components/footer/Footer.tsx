import { Divider } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
import Accordion from "./Accordion";
import ContactButton from "../common/ContactButton"
const Footer = ({ locale }: { locale: string }) => {
  const footer = useTranslations("Footer");
  const footerData = {
    title: footer("title"),
    titleOne: footer("title-one"),
    titleTwo: footer("title-two"),
    titlePara: footer("title-para"),
    btnText: footer("btn-text"),
    followH: footer("follow-h"),
    oia: footer("oia"),
    buildNo: footer("build-no"),
    wayNo: footer("way-no"),
    teleOne: footer("tele-one"),
    address: footer("address"),
    oiaW: footer("oia-w"),
    emailOia: footer("email-oia"),
    teleTwo: footer("tele-two"),
    auditCc: footer("audit-cc"),
    emailAc: footer("email-ac"),
    eacOne: footer("eac-one"),
    eacTwo: footer("eac-two"),
    investRel: footer("invest-rel"),
    investEmail: footer("invest-email"),
    locate:footer("locate"),
    copyRight: footer("copy-right"),
    contactInfo:footer("contact-info")
  };

  const {
    title,
    titleOne,
    titleTwo,
    titlePara,
    btnText,
    followH,
    oia,
    buildNo,
    wayNo,
    teleOne,
    address,
    oiaW,
    emailOia,
    teleTwo,
    auditCc,
    emailAc,
    eacOne,
    eacTwo,
    investRel,
    investEmail,
    locate,
    copyRight,
    contactInfo
  } = footerData;
  const dirChange =
    locale === "en" ? "row" : "flex-row-reverse";
  return (
    <div className=" footer-pattern lg:pt-[80px] pt-[20px]">
      <ScreenContainer>
        <section className="footer relative z-10 flex flex-col">
     
          <div className="flex flex-col w-full min-[1070px]:hidden">
            <Accordion title={contactInfo}>
            <div className="flex flex-1 shrink-0 flex-col">
              <div className="flex sm:flex-row flex-col sm:gap-[99px] gap-[20px] sm:px-[10px] p-0">
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3 className={`footerLabel rtl:font-TajawalBold text-[#ffffff]`}>
                    {oia}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight flex flex-row gap-[20px]`}
                    >
                      <span>{buildNo}</span><span>{wayNo}</span>
                    </span>
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {address}
                    </span>
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {teleOne}<span className="rtl:hidden ltr:inline">+968 2474 5100</span><span className="rtl:inline ltr:hidden ">5100 2474 968+</span>
                    </span>
                  </p>
                </div>
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel rtl:font-TajawalBold text-[#ffffff]`}
                  >
                    {oiaW}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {emailOia}
                    </span>
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight `}
                    >
                      {teleTwo}
                    </span>
                  </p>
                </div>
                
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-[99px] gap-[20px] mt-[20px] sm:px-[10px] p-0">
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel rtl:font-TajawalBold text-[#ffffff] `}
                  >
                    {investRel}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {investEmail}
                    </span>
                  </p>
                </div>
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel text-[#ffffff] rtl:font-TajawalLight`}
                  >
                    {auditCc}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent rtl:font-TajawalLight text-[#ffffff]`}
                    >
                      {emailAc}
                      <br />
                      <span
                        className={`footerContent rtl:font-TajawalLight text-[#ffffff]`}
                      >
                        {eacOne} {eacTwo}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <ContactButton locale={locale} />
                </div>
            </div>
            </Accordion>
            <Accordion title={locate}>
              <div className="flex flex-col sm:gap-[32px] gap-[20px]">
            <div className="flex flex-start">
                <Link
                  href="https://maps.app.goo.gl/nyXYDzQq1jNX9ZiW6"
                  target="_blank"
                  className="h-[170px] sm:max-w-[624px] w-full md:h-[290px] lg:block"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/images/google-map-oia.svg"
                    className="w-full h-full object-cover rounded-[6px]"
                    alt="oia address"
                  />
                </Link>
              </div>
              <ul
                className={`row rlt:flex-row-reverse justify-center flex flex-row gap-[16px] sm:gap-[6.6px] lg:gap-[12.7px]`}
              >
                <li>
                  <Link href="https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d" target="_blank"  rel="noopener noreferrer">
                    <img
                      src="/assets/icons/fb-color-icon.svg"
                      className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="fb"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/spacebyoia/
" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/icons/insta-icon.svg"
                    className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww " target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/twitter-x-icon.svg"
                     className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/oman-investment-authority" target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                    className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="linkedin"
                    />
                  </Link>
                </li>
                <li>
                <Link href="https://youtube.com/@omaninvestmentauthority4260?si=MrqHqfmtlH5Gzrjx" target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/youtube-color-icon.svg"
                     className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="youtube"
                    />
                  </Link>
                </li>
                {/* <li>
                  <Link href="/">
                    <img
                      src="/assets/icons/wa-color-icon.svg"
                     className="h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]"
                      alt="whatsapp"
                    />
                  </Link>
                </li> */}
              </ul>
              </div>
            </Accordion>
          </div>
          <div className="footer-sec-two min-[1070px]:flex flex-col justify-between gap-[115px] flex-wrap lg:flex-row hidden ">
            <div className="flex flex-1 shrink-0 flex-col">
              <div className="flex flex-row gap-[115px]">
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3 className={`footerLabel rtl:font-TajawalBold text-[#ffffff]`}>
                    {oia}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight flex flex-row gap-[20px]`}
                    >
                      <span>{buildNo}</span><span>{wayNo}</span>
                    </span>
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {address}
                    </span>
                    <span className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {teleOne}<span className="rtl:hidden ltr:inline">+968 2474 5100</span><span className="rtl:inline ltr:hidden ">5100 2474 968+</span>
                    </span>
                  </p>
                </div>
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel rtl:font-TajawalBold text-[#ffffff]`}
                  >
                    {oiaW}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {emailOia}
                    </span>
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight `}
                    >
                      {teleOne}<span className="rtl:hidden ltr:inline">+968 2474 5100</span><span className="rtl:inline ltr:hidden ">5100 2474 968+</span>
                    </span>
                  </p>
                </div>
                
              </div>
              <div className="flex flex-row gap-[115px] mt-[30px]">
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel rtl:font-TajawalBold text-[#ffffff] `}
                  >
                    {investRel}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent text-[#ffffff] rtl:font-TajawalLight`}
                    >
                      {investEmail}
                    </span>
                  </p>
                </div>
                <div className="flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]">
                  <h3
                    className={`footerLabel text-[#ffffff] rtl:font-TajawalLight`}
                  >
                    {auditCc}
                  </h3>
                  <p className="flex flex-col gap-[5px] md:gap-[8px]">
                    <span
                      className={`footerContent rtl:font-TajawalLight text-[#ffffff]`}
                    >
                      {emailAc}
                      <br />
                      <span
                        className={`footerContent rtl:font-TajawalLight text-[#ffffff]`}
                      >
                        {eacOne} {eacTwo}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-[10px]">
                <ContactButton locale={locale} />
                </div>
            </div>

            <div className="mb-[20px] mt-[40px] flex flex-col gap-[30px] md:mb-[49.52px] md:mt-[45.56px] lg:m-0">
              <div className="flex flex-start">
                <Link
                  href="https://maps.app.goo.gl/nyXYDzQq1jNX9ZiW6"
                  target="_blank"
                  className="map-img-footer"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/images/google-map-oia.svg"
                    className="h-[166px] w-full max-w-full md:h-[295.48px] lg:block lg:h-[243px] lg:max-w-[404px] object-cover rounded-[6px]"
                    alt="oia address"
                  />
                </Link>
              </div>
              <ul
                className={`row rtl:flex-row-reverse mx-auto flex flex-row gap-[16px] sm:gap-[6.6px] lg:gap-[12.7px]`}
              >
                <li>
                  <Link target="_blank" href="https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/fb-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="fb"
                    />
                  </Link>
                </li>
                <li>
                  <Link  href="https://www.instagram.com/spacebyoia/" target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/insta-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww" target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/twitter-x-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/oman-investment-authority" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="linkedin"
                    />
                  </Link>
                </li>
                <li>
                <Link href="https://www.youtube.com/@omaninvestmentauthority4260" target="_blank" rel="noopener noreferrer" >
                    <img
                      src="/assets/icons/youtube-color-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="whatsapp"
                    />
                  </Link>
                </li>
                
                {/* <li>
                  <Link href="/">
                    <img
                      src="/assets/icons/wa-color-icon.svg"
                      className="h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]"
                      alt="whatsapp"
                    />
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <Divider
            type="horizontal"
            style={{
              borderColor: "#E0D5C1",
              width: "100%",
              margin: "30px 0",
            }}
            className="hidden min-[1070px]:block"
          />
          <div className="footer-sec-three pb-[40px] max-[1070px]:pt-[20px]">
            <div className="flex flex-col items-center justify-between gap-[20px] md:gap-[32px] lg:flex-row lg:gap-0">
              <div>
                <img
                  src="/assets/icons/oia-footer-logo.svg"
                  className="h-[30px] w-full max-w-[252px] md:h-[50px] md:max-w-[412px]"
                  alt="oia logo"
                  
                />
              </div>
              <div>
                <p
                  className={`copyRight  rtl:font-TajawalLight text-[#ffffff]`}
                >
                  {locale === "en" ? "Copyright © 2024 Oman Investment Authority . All rights reserved":"حقوق الطبع والنشر © 2024 جهاز الاستثمار العماني. جميع الحقوق محفوظة"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScreenContainer>
    </div>
  );
};
export default Footer;
