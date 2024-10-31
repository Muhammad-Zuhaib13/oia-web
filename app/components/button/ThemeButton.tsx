"use client";
import { colorTheme } from "@/app/common/colorTheme";
// import { Button } from "@mui/material";
const ThemeButton = ({ label }: { label: string }) => {
  return (
    <button
      className={`font-DINABold rounded-none px-[20px] text-[16px] leading-[22.5px]`}
      style={{
        // "&:hover": {
        //   backgroundColor: colorTheme.darkbrown,
        // },
        backgroundColor: colorTheme.btnbrown,
        color: colorTheme.white,
      }}
    >
      {label}
    </button>
  );
};

export default ThemeButton;
