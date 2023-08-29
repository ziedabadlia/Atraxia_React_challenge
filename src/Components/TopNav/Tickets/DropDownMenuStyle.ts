import { SxProps } from "@mui/material";

export const MenuItemStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const MenuItemNumberStyle = (bgcolor: string): SxProps => {
  return {
    color: bgcolor === "#EEE" ? "#000" : "#FFF",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    height: "20px !important",
    width: "20px !important",
    p: "7px",
    fontWeight: "600",
    letterSpacing: "0",
    borderRadius: "50%",
    bgcolor: bgcolor,
  };
};
