"use client";

import { localeNames, locales, usePathname, useRouter, type Locale } from "@/i18n.config";
import { useState} from "react";
import { Fade } from "react-awesome-reveal";
import { colorTheme } from "../common/colorTheme";

export default function RespLocaleSwitcher({ locale, imgCls="" }: { locale: Locale, imgCls?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const getNextLocale = (currentLocale: Locale) => {
    const currentIndex = locales.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    return locales[nextIndex];
  };

  const changeLang = () => {
    const newLocale = getNextLocale(locale);
    router.replace(pathname, { locale: newLocale });
  };
  const switchText = () => {
    if (locale === "en"){
      return "العربية"
    }
    else if (locale === "ar"){  
      return "Eng";
    }
  }
const setFontFamily = locale === "en" ? "font-GESndBookMedium" : "fontDINAMedium"
  return (
    <div className="lang-switch h-full flex items-center justify-center w-full">
      <button
      // p-[8px]
        className="lang-dropdown-select flex justify-center items-center cursor-pointer flex-row gap-[4px]  rounded-[6px] bg-transparent text-white "
        style={{ direction: "ltr" }}
        onClick={changeLang}
      >
        <span className={`font-medium text-[14px] leading-[14px] text-white uppercase ${setFontFamily}`}>
         {switchText()}
        </span>
        <img
          src={"/assets/icons/chervon-left-white.svg"}
          alt="chevron"
          className={`${imgCls}`}
        />
      </button>
    </div>
  );
}