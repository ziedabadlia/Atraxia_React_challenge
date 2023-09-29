import { Box, Button, IconButton, InputBase, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import SupportSvg from '../../../svg/SupportSvg';
import * as style from './index.style';

const SupportContent = () => {
  return (
    <Box sx={style.SupportStyles}>
      <SupportSvg />
      <Typography p="5px" variant="h5" fontWeight={'bold'}>
        Support Forums
      </Typography>
      <Typography p={'5px'} variant="body1" color={'#555555'}>
        Search the topic you need help with our support forums.
      </Typography>
      <Button
        variant="text"
        color="primary"
        sx={{ fontWeight: '700' }}
        endIcon={<ArrowForwardIcon color="primary" sx={{ fontWeight: '700' }} />}
      >
        BROWSE FORUMS
      </Button>
      <Paper sx={style.PaperStyles}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={style.inputBaseStyles}
          placeholder="Search support forum"
          inputProps={{ 'aria-label': 'Search support forum' }}
        />
      </Paper>
    </Box>
  );
};

export default SupportContent;
