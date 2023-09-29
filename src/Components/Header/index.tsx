import * as style from "./index.style"
import { Box } from "@mui/material"
import React from "react"



interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Box sx={style.TopNavStyle}>{children}</Box>;
};

export default Header;
