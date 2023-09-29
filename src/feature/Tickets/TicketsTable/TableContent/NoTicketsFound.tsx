import { Box, Typography } from '@mui/material';
import * as style from "../Table.style"
import { useContext } from 'react';
import LensSvg from '../../../../svg/LensSvg';
import { Context, ContextValue } from '../../../../state/globalContext';

const NoTicketsFound = () => {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  return (
    <Box
      sx={style.NoTicketsFoundBoxWrapper}
    >
      <LensSvg />
      <Typography fontWeight={'bold'}>No tickets found for '{state.input}'</Typography>
      <Typography>Please adjust your search term and try again.</Typography>
    </Box>
  );
};

export default NoTicketsFound;
