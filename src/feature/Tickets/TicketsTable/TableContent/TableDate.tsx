import { Grid, Box, Typography } from '@mui/material';
import formatDate from '../../../../helper/formatDate'; 
const TableDate = ({ date }: { date: Date }) => {
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" fontWeight="500">
          {formatDate(date)}
        </Typography>
      </Box>
    </Grid>
  );
};

export default TableDate;
