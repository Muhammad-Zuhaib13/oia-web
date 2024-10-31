"use client";

import { Link } from "@/i18n.config";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};
const NavDropDown = ({ data, locale }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const strippedPathname = stripLocale(pathname);

  const isActive = (href: string) => {
    return strippedPathname === href;
  };
  const isAnySubLinkActive = (subMenu: any[]) => {
    const links = subMenu.map((item) => item.href);
    return links.some((link) => isActive(link));
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener(
        "click",
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative ">
      <button
        onClick={toggleDropdown}
        className={`navbarFont flex flex-row items-center gap-[8px] ${isAnySubLinkActive(data?.subMenu) ? "text-[#F4C76C] font-DINABold !rtl:font-TajawalBold !font-bold" : "text-white"} font-normal rtl:font-TajawalMedium rtl:font-normal font-DINARegular `}
      >
        {data?.title}
        <span className="flex transform flex-col justify-center transition-transform">
          <img
            src={"/assets/icons/chevron-down-white.svg"}
            alt="chevron"
            className="object-fit h-auto w-auto"
          />
        </span>
      </button>
      <ul
        className={`max-w-auto top-[40px] absolute z-10 min-w-[250px] w-max overflow-hidden border-t-[3px] border-t-[#F4C76C] bg-[#594226] transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
        style={{
          boxShadow: "0px 0px 20px 0px #0000001A",
        }}
      >
        {data?.subMenu &&
          data?.subMenu.map((item: any, index: number) => {
            return (
              <li key={index}>
                {item?.href ? (
                  <Link
                    href={`/${item?.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`navbarSubMenuFont block w-full border-b-[1px] border-b-[#F4C76C] px-[16px] py-[12px]  leading-[14px] text-[#F4C76C] transition duration-300 ease-in-out hover:bg-[#F4C76C] hover:text-[#594226]  ${
                      isActive(item?.href)
                        ? "text-white font-DINABold rtl:font-TajawalBold !font-bold"
                        : "text-[#F4C76C] rtl:font-TajawalRegular font-DINARegular font-normal"
                    }`}
                  >
                    {item?.title}
                  </Link>
                ) : (
                  <span  className={`navbarSubMenuFont block w-full border-b-[1px] border-b-[#F4C76C] px-[16px] py-[12px]   leading-[14px] text-[#F4C76C] transition duration-300 ease-in-out hover:bg-[#F4C76C] hover:text-[#594226]  ${
                    isActive(item?.href)
                      ? "text-white font-DINABold !rtl:font-TajawalBold !font-bold"
                      : "text-[#F4C76C] rtl:font-TajawalRegular font-DINARegular font-normal"
                  }`}>{item?.title}</span>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NavDropDown;
