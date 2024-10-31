import React from "react";
interface GeneralButtonProps {
  onClick?: () => void;
  bgColor?: string;
  extraStyles?: React.CSSProperties;
}
const GeneralButton: React.FC<any> = ({
  title,
  onClick,
  bgColor = "#594226",
  extraStyles,
}) => {
  return (
    <button className="general-btn" onClick={onClick} style={{ ...extraStyles}}>
      <span className="general-btn-text font-DINABold">
        {title}
      </span>
      
    </button>
  );
};

export default GeneralButton;
