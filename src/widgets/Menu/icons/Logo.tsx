import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <Svg viewBox="0 0 32 32" {...props}>
    <image width="32" height="32" href="/images/logo.png"/>
  </Svg>
  );
};

export default Logo;