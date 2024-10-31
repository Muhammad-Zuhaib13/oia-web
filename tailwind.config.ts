import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DINABold: ["var(--font-din-alternate-bold)"],
        DINAMedium: ["var(--font-din-alternate-medium)"],
        DINARegular: ["var(--font-din-alternate-regular)"],
        TajawalBlack:["var(--font-tajawal-black)"],
        TajawalBold:["var(--font-tajawal-bold)"],
        TajawalExtraBold:["var(--font-tajawal-extra-bold)"],
        TajawalExtraLight:["var(--font-tajawal-extra-light)"],
        TajawalLight:["var(--font-tajawal-light)"],
        TajawalMedium:["var(--font-tajawal-medium)"],
        TajawalRegular:["var(--font-tajawal-regular)"],
        poppinsRegular:["var(--font-poppins-regular)"],
        poppinsMedium:["var(--font-poppins-medium)"],
        poppinsSemiBold:["var(--font-poppins-semibold)"],
        poppinsBold:["var(--font-poppins-bold)"],
      },
      colors: {
        primary:"var(--primary)",
        white: "var(--text-white)",
        brown: "var(--text-brown)",
        dbrown: "var(--dark-brown)",
        medbrown: "var(--med-brown)",
        black: "var(--text-black)",
        dgrey: "var(--text-dark-grey)",
        lightGrey:"var(--light-grey)",
        contrast:"var(--contrast)"

      }
    },
    
  },
  plugins: [],
};
export default config;
