"use client";
import { Link } from "@/i18n.config";
// import Divider from "@mui/material/Divider";
import { Divider } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  decreaseCSSProperties,
  increaseCSSProperties,
  resetCSSProperties,
} from "../../utils/fontResize";
import RespLocaleSwitcher from "../RespLocaleSwitcher";
import ScreenContainer from "../screencontainer/ScreenContainer";
const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};

const RespHeader: React.FC<any> = ({
  data,
  locale,
  navData,
}) => {
  const pathname = usePathname();
  const strippedPathname = stripLocale(pathname);
  const isActive = (href: string) => {
    return strippedPathname === href;
  };
  const isAnySubLinkActive = (subMenu: any[]) => {
    const links = subMenu?.map((item) => item.href);
    return links?.some((link) => isActive(link));
  };

  
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [theme, setTheme] = useState<string | null>(null);
  const [subMenu, setSubMenu] = useState(false);

  //
  const [openMenuId, setOpenMenuId] = useState<
    number | null
  >(null);

  useEffect(()=>{
    document.body.style.overflowY= open ? "clip":"auto"

    return()=>{
      document.body.style.overflowY="auto"
    }
  },[open])
  const toggleSubMenu = (menuId: number) => {
    if (openMenuId === menuId) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(menuId);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage?.setItem("theme", newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };
  const router = useRouter();
  return (
    <div className="relative">
      <div className="nav-pattern resp-header-section  realtive  !h-[80px] w-full pb-[13px] pt-[15px]">
        <ScreenContainer>
          <nav className="relative z-20 flex items-center justify-between">
            <div className="flex flex-row">
              <div className="h-[40px]  w-auto shrink-0">
                <img
                  src="/assets/icons/nav-resp-logo.svg"
                  alt="OIA"
                  className="object-fit h-full w-full"
                  onClick={() => {
                    router.push("/");
                  }}
                />
              </div>
              <Divider
                type="vertical"
                className="mx-[10px] my-auto h-[40px] bg-[#D0D0D0] sm:mx-[20px]"
              />
              <div className="h-[40px] w-auto shrink-0">
                <img
                  src="/assets/icons/nav-resp-2040.svg"
                  alt="Oman 2040"
                  className="object-fit h-full w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-[9px]">
              {/* @ts-ignore */}
              <div className="h-[30px] rounded-[3.33px] border-[0.83px] border-[#F4C76C] px-[6px]">
                {/* @ts-ignore */}
                <RespLocaleSwitcher
                  // @ts-ignore
                  locale={locale}
                  imgCls="hidden"
                />
              </div>
              <button onClick={() => {}}>
                <img
                  src="/assets/icons/nav-search.svg"
                  alt="navbar"
                  className="object-fit h-[30px] w-[30px]"
                />
              </button>
              <button onClick={toggleDrawer(true)}>
                <img
                  src="/assets/icons/nav-hamburger.svg"
                  alt="navbar"
                  className="object-fit h-[30px] w-[30px]"
                />
              </button>
            </div>
          </nav>
        </ScreenContainer>
        <div
          className={`drawer w-full h-screen fixed inset-0 z-[999] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-[110%] rtl:translate-x-[-110%]"
          }`}
        >
          <div className="h-screen w-full bg-[#FFFFFF]">
            <div className="mid-max-px nav-pattern-resp fixed flex h-[60px] w-full items-center justify-between bg-[url('/assets/images/header-resp-patttern.png')] bg-cover bg-no-repeat py-[15px]">
              <div className="flex flex-row">
                <div className="h-[40px]  w-auto shrink-0">
                  <img
                    src="/assets/icons/nav-resp-logo.svg"
                    alt="OIA"
                    className="object-fit h-full w-full"
                    onClick={() => {
                      router.push("/");
                    }}
                  />
                </div>
                <Divider
                  type="vertical"
                  className="mx-[10px] my-auto h-[40px] bg-[#D0D0D0] sm:mx-[20px]"
                />
                <div className="h-[40px] w-auto shrink-0">
                  <img
                    src="/assets/icons/nav-resp-2040.svg"
                    alt="Oman 2040"
                    className="object-fit h-full w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/assets/icons/close-black.svg"
                    alt="close button"
                  />
                </button>
              </div>
            </div>
            <div className="bg-resp-nav h-screen overflow-y-auto w-full pb-[40px] pt-[100px] dark:bg-black ">
              <ScreenContainer className="bg-resp-nav">
                <div className="flex flex-col gap-[30px] pb-[40px]">
                  <div className="flex flex-row gap-[10px]">
                    <button
                      className="flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white"
                      onClick={() =>
                        increaseCSSProperties()
                      }
                    >
                      <span>A+</span>
                    </button>
                    <button
                      className="flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white"
                      onClick={() => resetCSSProperties()}
                    >
                      <span>A</span>
                    </button>
                    <button
                      className="flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white"
                      onClick={() =>
                        decreaseCSSProperties()
                      }
                    >
                      <span>A-</span>
                    </button>
                    <button
                      className="flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC]"
                      onClick={() => toggleTheme()}
                    >
                      <img
                        src="/assets/icons/theme-switch-white.svg"
                        className="object-fit h-[24px] w-[18px]"
                      />
                    </button>
                  </div>
                  <nav className="flex flex-col">
                    <div className="nav-memu ">
                      <ul className="flex flex-col">
                        {navData &&
                          navData.map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className={`${index === 0 ? "pb-[22px] sm:pb-[20px]" : "py-[22px] sm:py-[20px]"} ${
                                    navData.length - 1 ===
                                    index
                                      ? ""
                                      : "border-b-[1px] border-b-[#C2C2C2]"
                                  }`}
                                >
                                  {item.subMenu &&
                                  item.subMenu.length >
                                    0 ? (
                                    <div>
                                      <button
                                        onClick={() =>
                                          toggleSubMenu(
                                            item.id,
                                          )
                                        }
                                        className={`navbarFontResp flex flex-row items-center gap-[8px] font-DINARegular ${
                                          isAnySubLinkActive(
                                            item?.subMenu ||
                                              [],
                                          )
                                            ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                            : "font-normal rtl:font-TajawalRegular"
                                        }`}
                                      >
                                        {item?.title}
                                        <span className="btn-chevron-down transform transition-transform">
                                          <img
                                            src={
                                              "/assets/icons/chevron-down.svg"
                                            }
                                            className="object-fit h-auto w-auto"
                                            alt="chevron"
                                          />
                                        </span>
                                      </button>

                                      {openMenuId ===
                                        item.id && (
                                        <ul
                                          className={
                                            "mt-[8px] flex flex-col gap-[4px] px-[14px] sm:mt-[20px] sm:gap-[20px]"
                                          }
                                        >
                                          {item.subMenu.map(
                                            (
                                              subItem: any,
                                              subIndex: number,
                                            ) => (
                                              <li
                                                key={
                                                  subIndex
                                                }
                                                onClick={() =>
                                                  setOpen(
                                                    false,
                                                  )
                                                }
                                              >
                                                {subItem?.href ? (
                                                  <Link
                                                    href={`/${subItem?.href}`}
                                                    onClick={() =>
                                                      setOpenMenuId(
                                                        null,
                                                      )
                                                    }
                                                    className={`navbarFontResp font-DINARegular  ${
                                                      isActive(
                                                        subItem?.href,
                                                      )
                                                        ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                        : "font-normal rtl:font-TajawalRegular"
                                                    }`}
                                                  >
                                                    {
                                                      subItem?.title
                                                    }
                                                  </Link>
                                                ) : (
                                                  <span
                                                    className={`navbarFontResp font-DINARegular ${
                                                      isActive(
                                                        subItem?.href,
                                                      )
                                                        ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                        : "font-normal rtl:font-TajawalRegular"
                                                    }`}
                                                  >
                                                    {
                                                      subItem?.title
                                                    }
                                                  </span>
                                                )}
                                              </li>
                                            ),
                                          )}
                                        </ul>
                                      )}
                                    </div>
                                  ) : (
                                    <Link
                                      href={`${item?.href}`}
                                      className={`navbarFontResp font-DINARegular   ${
                                        isActive(item?.href)
                                          ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                          : "font-normal rtl:font-TajawalRegular"
                                      }`}
                                      onClick={() =>
                                        setOpen(false)
                                      }
                                    >
                                      {item?.title}
                                    </Link>
                                  )}
                                </li>
                              );
                            },
                          )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </ScreenContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RespHeader;
