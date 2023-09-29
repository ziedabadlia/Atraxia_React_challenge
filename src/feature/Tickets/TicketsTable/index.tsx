import { Box } from '@mui/material';
import TableContent from './TableContent';
import TableHeader from './TableHeader';

const TicketsTable = () => {
  return (
    <Box>
      <TableHeader />
      <TableContent />
    </Box>
  );
};

export default TicketsTable;
