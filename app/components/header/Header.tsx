"use client";
import DesktopHeader from "./DesktopHeader";
import RespHeader from "./RespHeader";
const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};
type NavLinksData = {
  home: string;
  aboutOia: string;
  oiaImpact: string;
  ourInvestments: string;
  mediaCenter: string;
  oman: string;
  contactUs: string;
  careers: string;
  inCountry: string;
  nationalEconomy: string;
  jointVentures: string;
  nationalDevFund: string;
  futureFundOman: string;
  futureGenFund: string;
  news: string;
  newsDetails: string;
  annualReports: string;
  injazAndEejaz: string;
  internshipOpp: string;
  locale: string;
  searchText: string;
};
type HeaderProps = {
  data: NavLinksData;
};
const Header: React.FC<any> = ({ data, locale, navData }) => {
  return (
    <div
      className={`header-section sticky left-0 right-0 top-[-1px] z-[1000]`}
    >
      <div className="hidden xl:block">
        <DesktopHeader data={data} locale={locale} navData={navData} />
      </div>
      <div className="block xl:hidden">
        <RespHeader data={data} locale={locale} navData={navData} />
      </div>
      <div className="w-full h-[1px] bg-[#0000004D]"></div>
    </div>
  );
};
export default Header;
