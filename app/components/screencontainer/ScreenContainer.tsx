import { Box } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const ScreenContainer = ({ children }: Props) => {
  return <Box className="max-w-[1310px] mx-auto">{children}</Box>;
};

export default ScreenContainer;
