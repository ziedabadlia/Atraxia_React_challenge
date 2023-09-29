import { useContext, useEffect } from 'react';
import { Box, Divider, Grid } from '@mui/material';
import { Context, ContextValue } from '../../../../state/globalContext';
import useFetchData from '../../../../hooks/useFetchData';
import { useContentToDisplay } from './table.hooks'; 
import useRandomId from '../../../../hooks/useRandomId';
import Replies from './Replies';
import NoTicketsFound from './NoTicketsFound';
import PaginationControl from '../../../../Components/PaginationControl';
import usePagination from '../../../../hooks/usePagination';
import LoadingSpinner from '../../../../Components/LoadingSpinner';
import TableTitle from './TableTitle';
import TableStatus from './TableStatus';
import TableDate from './TableDate';
import { TableData } from '../../../../Types';

function TableContent() {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  const { status, filter, pagination } = state;
  const { fetchData } = useFetchData();
  const { content } = useContentToDisplay();
  const { generateRandomId } = useRandomId();

  useEffect(() => {
    fetchData('api/data');
  }, []);

  const { getPageItems } = usePagination(content, pagination.itemsPerPage);
  const paginatedContent = getPageItems();
  return (
    <Box
        ml= '35px'
        p= '15px'
    >
      {status.loading ? (
        <LoadingSpinner />
      ) : filter.TicketsNotFound ? (
        <NoTicketsFound />
      ) : (
        paginatedContent.map(({ title, category, status, date, replies }: TableData) => (
          <>
            <Divider variant="middle" />
            <Grid container spacing={4} key={generateRandomId()} pt="15px" pb="10px">
              <TableTitle title={title} category={category} />
              <TableStatus status={status} />
              <TableDate date={date} />
              <Replies replies={replies} />
            </Grid>
          </>
        ))
      )}
      {!filter.TicketsNotFound && <PaginationControl />}
    </Box>
  );
}

export default TableContent;
