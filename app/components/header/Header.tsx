import { Link, Locale } from "@/i18n.config";
import { Box } from "@mui/material";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import ThemeButton from "../button/ThemeButton";
import ScreenContainer from "../screencontainer/ScreenContainer";
const oiaLogo = "/assets/icons/oia-logo-black.svg";
const Header = () => {
  // const pathname = usePathname();
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;
  return (
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      <Box className="relative pb-[12px] pt-[18px]">
        <Box className="absolute right-0 translate-x-[-17px] translate-y-[17px]">
          <LocaleSwitcher locale={locale} />
        </Box>
        <Box>
          <ScreenContainer>
            <Box className="flex justify-center">
              <Box>
                <Image
                  src={oiaLogo}
                  alt="oman investment auhtority"
                  width={477}
                  height={58}
                />
              </Box>
              <Box></Box>
            </Box>
          </ScreenContainer>
        </Box>
      </Box>
      <Box className="border-y-[1px] border-solid border-[#DED2BD] py-[12px]">
        <ScreenContainer>
          <Box className="flex flex-row items-center justify-between">
            <Box>
              <ul className="flex flex-row justify-between gap-[40px]">
                <li>
                  <Link
                    href="/"
                    className="font-DINAMedium text-[14px] leading-[14px] text-[#202020]"
                  >
                    {t("navLinks.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-DINAMedium text-[14px] leading-[14px] text-[#202020]"
                  >
                    {t("navLinks.about")}
                  </Link>
                </li>
              </ul>
            </Box>
            <Box>
              <ThemeButton label="Apply Now" />
            </Box>
          </Box>
        </ScreenContainer>
      </Box>
    </Box>
  );
};
export default Header;
