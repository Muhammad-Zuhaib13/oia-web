"use client";
import Menu from "@mui/material/Menu";
import { usePathname, useRouter } from "next/navigation";
import React, { useState , useRef, useEffect} from "react";
import {
  decreaseCSSProperties,
  increaseCSSProperties,
  resetCSSProperties,
} from "../../utils/fontResize";
import LocaleSwitcher from "../LocaleSwitcher";
import ScreenContainer from "../screencontainer/ScreenContainer";
import Navbar from "./Navbar";
const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};

const DesktopHeader: React.FC<any> = ({
  data,
  navData,
  locale,
}) => {
  const pathname = usePathname();
  const strippedPathname = stripLocale(pathname);
  const [theme, setTheme] = useState<string | null>(null);

  const isActive = (href: string) => {
    return strippedPathname === href;
  };
  const isAnySubLinkActive = (links: string[]) => {
    return links.some((link) => isActive(link));
  };
  const [addCollapseClass, setAddCollapseClass] =
    useState(false);
  const addToggleClass = () => {
    setAddCollapseClass(!addCollapseClass);
  };

  React.useState<null | HTMLElement>(null);
  const [anchorElAccess, setAnchorElAcess] =
    React.useState<null | HTMLElement>(null);

  const openAccess = Boolean(anchorElAccess);

  const handleClickAccess = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElAcess(event.currentTarget);
  };
  const handleCloseAccess = () => {
    setAnchorElAcess(null);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage?.setItem("theme", newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };
 
  const dirChange =
    locale === "en" ? "row" : "rtl:flex-row-reverse";
  //
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (
     event: React.ChangeEvent<HTMLInputElement>,
   ) => {
     setSearchQuery(event.target.value);
   };
   const handleKeyDown = (
     event: React.KeyboardEvent<HTMLInputElement>,
   ) => {
     if (event.key === "Enter"  && searchQuery.length >= 1) {
       router.push(`/search/${searchQuery}`);
     }
   };
  return (
    <div className=" nav-pattern desktop-header-section w-full flex items-center justify-center">
      <ScreenContainer>
        <div className="relative flex items-center justify-between">
          <div className="flex items-baseline gap-[20px]">
            <img
              src="/assets/icons/oia-nav.svg"
              alt="oia-logo"
              className="object-fit cursor-pointer"
              onClick={()=>{router.push('/')}}
            >
              </img>
            <img
              src="/assets/icons/oia-2024.svg"
              alt="oia-2024"
              className="object-fit h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-[27px]">
            <div className="relative z-30 flex justify-end">
              <ul
                className={`flex  flex-row gap-[10px] rtl:flex-row-reverse items-center`}
              >
                <li className="flex items-center relative">
                  <div ref={dropdownRef} className="flex items-center relative">
                    <button
                    className=""
                    id="access"
                    onClick={toggleDropdown}
                  >
                    <img
                      src="/assets/icons/access-icon.svg"
                      className="object-fit h-[36px] w-[46px]"
                      alt="accessibility"
                    />
                  </button>
                  <div  className={` ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0 hidden"} transition-all duration-300 ease-in-out translate-x-[-84%] rtl:translate-x-[84%] translate-y-[18px] min-w-[250px] w-full max-w-auto absolute top-[36px]`}>
                  <div
                      className="access-dropdown relative before:right-[8px] rtl:before:right-auto rtl:before:left-[6px] w-full border-t-[3px] border-t-[#F4C76C] bg-[#594226] "
                      style={{
                        boxShadow:
                          "0px 0px 20px 0px #0000001A",
                      }}
                    >
                      <ul>
                        <li>
                          <span
                            className={`block border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px] font-DINABold text-[14px] font-bold leading-[17px] text-[#F4C76C] rtl:font-TajawalBold `}
                            onClick={handleCloseAccess}
                          >
                            {locale === "en"
                              ? "Accessibility"
                              : "إمكانية الوصول"}
                          </span>
                        </li>
                        <li>
                          <span className="flex flex-row items-center justify-between border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px]">
                            <span className="font-DINAMedium text-[14px] font-medium leading-[17px] text-[#F4C76C] rtl:font-TajawalMedium ">
                              {locale === "en"
                                ? "Font Size"
                                : "حجم الخط"}
                            </span>
                            <span className="flex flex-row items-center">
                              <button
                                className="border-r-[1px] border-r-[#FFFFFF] px-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:border-r-0 rtl:font-TajawalMedium"
                                onClick={
                                  decreaseCSSProperties
                                }
                              >
                                A-
                              </button>
                              <button
                                className="border-r-[1px] border-r-[#FFFFFF] px-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:border-l-[1px] rtl:border-l-[#FFFFFF] rtl:font-TajawalMedium"
                                onClick={resetCSSProperties}
                              >
                                A
                              </button>
                              <button
                                className="pl-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:px-[8px] rtl:font-TajawalMedium"
                                onClick={
                                  increaseCSSProperties
                                }
                              >
                                A+
                              </button>
                            </span>
                          </span>
                        </li>
                        <li onClick={()=>{handleCloseAccess(); toggleTheme()}}>
                          <span className="flex flex-row items-center justify-between border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px] cursor-pointer">
                            <span className="font-DINAMedium text-[14px] font-medium leading-[17px] text-[#F4C76C] rtl:font-TajawalMedium">
                              {locale === "en"
                                ? "Contrast"
                                : "مقابلة"}
                            </span>
                            <span className="">
                              <img
                                src="/assets/icons/theme-switch-br.svg"
                                alt="contrast"
                                className="object-fit h-auto w-auto"
                              />
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative flex w-full items-center">
                    <input
                      // type="text"
                      className="rtl:font-GESndBookMedium h-[32px] w-[220px] rounded-[4px] border-[1px]  border-[#F4C76C] bg-transparent px-[12px] py-[9px] font-DINAMedium text-[12px] font-medium text-[#FFFFFF] placeholder:font-DINAMedium placeholder:text-[#FFFFFF] focus:border-[#9F8555] focus:outline-none placeholder:rtl:font-TajawalMedium"
                      onChange={handleSearch}
                      onKeyDown={handleKeyDown}
                      type="search"
                      placeholder={
                        locale === "en" ? "Search" : "يبحث"
                      }
                    >
                    </input>
                    <button className="absolute right-3 flex items-center rtl:right-[88%]">
                      <img
                        src="/assets/icons/search-icon-white.svg"
                        alt="search icon"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </li>
                {/* h-[20px] */}
                <li className="h-[32px] w-[80px]  rounded-[4px] border-[1px] border-[#F4C76C]">
                  {/* @ts-ignore */}
                  <LocaleSwitcher locale={locale} />
                </li>
              </ul>
            </div>
            <Navbar locale={locale} data={navData} />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};
export default DesktopHeader;
