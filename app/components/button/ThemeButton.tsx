"use client";
import { colorTheme } from "@/app/common/colorTheme";
import { Button } from "@mui/material";
const ThemeButton = ({ label }: { label: string }) => {
  return (
    <Button
      className={`font-DINABold rounded-none px-[20px] text-[16px] leading-[22.5px]`}
      sx={{
        "&:hover": {
          backgroundColor: colorTheme.darkbrown,
        },
        backgroundColor: colorTheme.btnbrown,
        color: colorTheme.white,
      }}
    >
      {label}
    </Button>
  );
};

export default ThemeButton;
