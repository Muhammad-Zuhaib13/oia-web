import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  midMaxPx?: boolean;
  className?:string;
}

const ScreenContainer = ({ children, style, midMaxPx=true , className=""}: Props) => {
  return (
    // 2xl:px-0 xl:px-0 lg:px-[60px] md:px-[20px] sm:px-[20px]
    <div className={`max-w-[1260px] w-full mx-auto ${className} ${midMaxPx ? "mid-max-px" : ""}`} style={style}>
      {children}
    </div>
  );
};

export default ScreenContainer;
