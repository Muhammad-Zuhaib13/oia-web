import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
interface CircularButtonProps {
  onClick?: () => void;
  bgColor?: string;
  extraStyles?: React.CSSProperties;
  iconColor?: string;
}
const CircularButton: React.FC<CircularButtonProps> = ({
  onClick,
  bgColor = "#594226",
  extraStyles,
  iconColor = ""
}) => {
  return (
    <Button
      shape="circle"
      onClick={onClick}
      className={`circular-btn`}
      style={{ backgroundColor: bgColor }}
    >
      <RightOutlined className="circulat-btn-icon" style={{color:!iconColor?'#ffffff':iconColor}} />
    </Button>
  );
};

export default CircularButton;
