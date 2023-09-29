import { Box, Typography } from '@mui/material';
import StaffIcon from '../../../../svg/StaffIcon';
import * as style from "../Table.style"

const Staff = () => {
  return (
    <Box
      sx={style.StaffWrapperBox}
    >
      <StaffIcon />
      <Typography variant="body1" fontWeight={'bold'}>
        STAFF
      </Typography>
    </Box>
  );
};

export default Staff;
