"use client";
import { Link } from "@/i18n.config";
import { usePathname } from "next/navigation";
import NavDropDown from "./NavDropDown";
const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};

const Navbar = ({ data, locale }: any) => {
  const navData = data;
  const pathname = usePathname();
  const strippedPathname = stripLocale(pathname);

  const isActive = (href: string) => {
    return strippedPathname === href;
  };
  const isAnySubLinkActive = (links: string[]) => {
    return links.some((link) => isActive(link));
  };
  return (
    <ul className="flex flex-row items-baseline gap-[30px]">
      {navData &&
        navData.map((item: any, index: number) => {
          return (
            <li key={index} className="flex mt-auto">
              {item?.subMenu && item?.subMenu.length > 0 ? (
                <NavDropDown data={item} locale={locale} />
              ) : (
                <Link
                  href={`${item?.href}`}
                  className={`navbarFont  ${isActive(item?.href) ? "text-[#F4C76C] font-DINABold rtl:font-TajawalBold font-bold":"text-white font-normal rtl:font-TajawalMedium rtl:font-normal font-DINARegular"}`}
                >
                  {item?.title}
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default Navbar;
