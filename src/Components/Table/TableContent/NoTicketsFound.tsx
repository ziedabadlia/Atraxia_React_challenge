import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import LensSvg from "../../svg/LensSvg";
import { Context, ContextValue } from "../../store/Ctx";

const NoTicketsFound = () => {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <LensSvg />
      <Typography fontWeight={"bold"}>
        No tickets found for "{state.input}"
      </Typography>
      <Typography>Please adjust your search term and try again.</Typography>
    </Box>
  );
};

export default NoTicketsFound;
