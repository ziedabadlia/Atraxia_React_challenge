import { Box } from "@mui/material";
import { DoubleBubble } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
