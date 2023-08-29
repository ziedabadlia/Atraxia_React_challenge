import { Chip, Box, Grid, SxProps } from "@mui/material";
import StatusColor from "../../../helper/StatusColor";

const StatusBoxStyles = (bgcolor: string): SxProps => {
  return {
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5.6875rem",
    height: "1.700rem",
    borderRadius: "0.875rem",
    bgcolor: bgcolor,
  };
};

const TableStatus = ({ status }: { status: string }) => {
  return (
    <Grid item xs={2}>
      <Box mr={5}>
        <Chip label={status} sx={StatusBoxStyles(StatusColor(status))} />
      </Box>
    </Grid>
  );
};

export default TableStatus;
