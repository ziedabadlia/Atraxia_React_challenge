import { Box, IconButton, Typography, Button } from '@mui/material';
import * as style from "./index.style"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useContext } from 'react';
import { Context, ContextValue } from '../../state/globalContext';
import usePagination from '../../hooks/usePagination';
import {useContentToDisplay} from '../../feature/Tickets/TicketsTable/TableContent/table.hooks';

const PaginationControl = () => {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  const { content } = useContentToDisplay();
  const { currentPage, totalPages, nextPage, prevPage, goToPage, startRow, endRow } = usePagination(
    content,
    state.pagination.itemsPerPage
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
      <Box>
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton
            aria-label="page button"
            sx={style.iconButton(currentPage,index)}
            key={index}
            onClick={() => goToPage(index + 1)}
          >
            <Typography>{index + 1}</Typography>
          </IconButton>
        ))}
      </Box>
      <Box
        sx={style.flexAlignItemsCenter}
      >
        <Typography variant="body2">
          {startRow}-{endRow} of {content.length}
        </Typography>
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          sx={style.controlButton}
        >
          <KeyboardArrowLeftIcon fontSize="small" />
        </Button>
        <Button
          variant="text"
          sx={style.controlButton}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationControl;
