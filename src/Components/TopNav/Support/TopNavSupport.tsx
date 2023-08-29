import { Box, Button, Typography } from "@mui/material";
import SupportIcon from "@mui/icons-material/Support";
import TopNav from "..";

const TopNavSupport = () => {
  return (
    <TopNav>
      <Box>
        <Typography variant="h5">Support Resources</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Button variant="text" sx={{ color: "#555555" }}>
          Need Help?
        </Button>
        <Button variant="contained" color="primary" startIcon={<SupportIcon />}>
          Get Support
        </Button>
      </Box>
    </TopNav>
  );
};

export default TopNavSupport;
