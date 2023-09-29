import { Chip, Box, Grid } from '@mui/material';
import { StatusBoxStyles } from '../Table.style';
import StatusColor from '../../../../helper/StatusColor';



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
