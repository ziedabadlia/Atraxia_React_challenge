import { Box, Typography } from '@mui/material';
import Header from '../../../Components/Header';
import DropDownMenu from './dropDownMenuTickets';
import SearchField from '../../../Components/SearchField';

const TicketsHeader = () => {
  return (
    <Header>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
          }}
        >
          My Tickets
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <DropDownMenu />
        <SearchField />
      </Box>
    </Header>
  );
};

export default TicketsHeader;
