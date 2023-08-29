import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import * as React from "react";

const TopNavStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "25px",
  borderBottom: "1px solid #EDEDED",
};

const TopNav: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Box sx={TopNavStyle}>{children}</Box>;
};

export default TopNav;
