"use client";

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Chevron from "../../public/assets/icons/chevron.svg";
import { colorTheme } from "../common/colorTheme";
const Icon = Chevron;
export default function LocaleSwitcher({
  locale,
}: {
  locale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLocale = event.target.value as Locale;
    router.replace(pathname, { locale: newLocale });
  };
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const [lang, setLang] = useState(locale);
  const changeLang = (locale: Locale) => {
    router.replace(pathname, { locale: locale });
  };
  return (
    <div>
      <div className="lang-dropdown relative w-auto font-DINABold">
        <div
          className="lang-dropdown-select flex cursor-pointer flex-row gap-[24px]"
          onClick={toggleOpen}
        >
          <span>{localeNames[lang]}</span>
          <button
            className="transform transition-transform"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <Image
              src={Icon}
              width={14}
              height={14}
              alt="chevron"
            />
          </button>
        </div>
        {open && (
          <Fade>
            <Box
              className="absolute right-0 top-[30px] w-[150px] rounded-[6px] bg-white py-[16px]"
              sx={{
                boxShadow: "0px 0px 20px 0px #0000001A",
              }}
            >
              <ul>
                {locales.map((loc) => (
                  <li
                    key={loc}
                    value={loc}
                    className="cursor-pointer px-[16px] py-[2px] transition duration-300 ease-in-out hover:bg-red-300"
                    style={{ color: colorTheme.lightbrown }}
                    onClick={() => changeLang(loc)}
                  >
                    {localeNames[loc]}
                  </li>
                ))}
              </ul>
            </Box>
          </Fade>
        )}
      </div>
      {/* <select
        value={locale}
        onChange={changeLocale}
        className={`text-[${colorTheme.lightbrown}] bg-transparent font-DINAMedium text-[14px]`}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select> */}
    </div>
  );
}
