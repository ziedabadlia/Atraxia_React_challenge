import { Box } from "@mui/material";
import { DoubleBubble } from "react-spinner-animated";
import * as style from "./index.style"
import "react-spinner-animated/dist/index.css";

const LoadingSpinner = () => {
  return (
    <Box
      sx={style.LoadingSpinnerBoxWrapper}
    >
      <DoubleBubble
        text={"Loading..."}
        center={false}
        width={"100px"}
        height={"100px"}
      />
    </Box>
  );
};

export default LoadingSpinner;
