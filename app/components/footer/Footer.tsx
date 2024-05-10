import { Box, Typography } from "@mui/material";
import ScreenContainer from "../screencontainer/ScreenContainer";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
const oiaLogo = "/assets/icons/oia-logo-white.svg";

const Footer = () => {
  const linksFirstSection = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "GOVERNANCE",
      path: "/",
    },
    {
      name: "OIA Impact",
      path: "/",
    },
    {
      name: "Our Investments",
      path: "/",
    },
    {
      name: "POTENTIAL",
      path: "/",
    },
  ];
  const linksSecondtSection = [
    {
      name: "Media Center",
      path: "/",
    },
    {
      name: "Oman",
      path: "/",
    },
    {
      name: "CAREERS",
      path: "/",
    },
    {
      name: "CONTACT US",
      path: "/",
    },
    {
      name: "ANNUAL REPORT",
      path: "/",
    },
  ];
  const socialLinks = [
    {
      icon: <InstagramIcon className="text-white" />,
      path: "/",
    },
    {
      icon: <FacebookIcon className="text-white" />,
      path: "/",
    },
    {
      icon: <GitHubIcon className="text-white"/>,
      path: "/",
    },
    {
      icon: <TelegramIcon className="text-white"/>,
      path: "/",
    },
  ];
  return (
    <Box className="py-[70px] bg-[#5A4427]">
      <ScreenContainer>
        <Box className="">
          <Box className="flex flex-row justify-between">
            <Box className="flex flex-row gap-[46px]">
              <Box className="flex flex-col gap-[50px]">
                <Box>
                  <Image
                    src={oiaLogo}
                    alt="oman investment auhtority"
                    width={140}
                    height={80}
                  />
                </Box>
                <Box>
                  <Typography
                    component={"p"}
                    className="text-[#FFFFFF] text-[16px] leading-[24px] font-DINAMedium"
                  >
                    Your Voice Matters! Whether you have questions, ideas <br />{" "}
                    to explore, we're here to listen and collaborate.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ul className="flex flex-col gap-[10px]">
                  {linksFirstSection?.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>
                        <Typography
                          component={"p"}
                          className="text-[#FFFFFF] text-[16px] leading-[24px] font-DINAMedium uppercase"
                        >
                          {link.name}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box>
              <Box className="flex flex-row">
                <Box className="w-[297px]">
                  <ul className="flex flex-col gap-[10px]">
                    {linksSecondtSection?.map((link, index) => (
                      <li key={index}>
                        <Link href={link.path}>
                          <Typography
                            component={"p"}
                            className="text-[#FFFFFF] text-[16px] leading-[24px] font-DINAMedium uppercase"
                          >
                            {link.name}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box>
                  <Box className="flex flex-col gap-[20px]">
                    <Typography
                      component={"h3"}
                      className="text-[#FFFFFF] text-[16px] font-medium leading-[24px]"
                    >
                      Follow us
                    </Typography>
                    <ul className="flex flex-row gap-[16px]">
                      {socialLinks?.map((link, index) => (
                        <li key={index}>
                          <Link href={link.path}>{link.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-[#DED2BD] w-full h-[1px] my-[30px]"></Box>
          <Box className="">
            <Typography
              component={"p"}
              className="text-[16px] text-[#FFFFFF] leading-[26px] capitalize font-DINAMedium text-center w-full"
            >
              Copyright &copy; 2023 Oman Investment Authority . All rights
              reserved
            </Typography>
          </Box>
        </Box>
      </ScreenContainer>
    </Box>
  );
};
export default Footer;
