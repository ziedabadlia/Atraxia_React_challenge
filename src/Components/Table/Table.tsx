import { Box } from "@mui/material";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

const Table = () => {
  return (
    <Box>
      <TableHeader />
      <TableContent />
    </Box>
  );
};

export default Table;
