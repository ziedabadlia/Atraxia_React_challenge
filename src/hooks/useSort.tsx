import { useContext } from 'react';
import { Context, ContextValue } from '../state/globalContext';
import ActionTypes from '../state/Actions/actions'; 
import _ from 'lodash';
import { TableData } from '../Types'; 
import {useContentToDisplay} from '../feature/Tickets/TicketsTable/TableContent/table.hooks';

export const sortingOrder = {
  DEFAULT: 'DEFAULT',
  ASC: 'ASC',
  DESC: 'DESC',
};

const useSort = (): { Sorting: (sortby: string) => void } => {
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;
  const { sort } = state;
  const { content } = useContentToDisplay();
  let sortedData: TableData[];

  const sortASC = (sortby: string) => {
    dispatch({ type: ActionTypes.LOADING_TRUE });
    sortby === 'replies'
      ? (sortedData = _.orderBy(content, (item: TableData) => item.replies.name, ['asc']))
      : (sortedData = _.orderBy(content, [sortby], ['asc']));

    dispatch({
      type: ActionTypes.SORTING_SUCCEED,
      payload: { sortedData, ChangeSortTypeTo: sortingOrder.ASC },
    });
  };
  const sortDESC = (sortby: string) => {
    dispatch({ type: ActionTypes.LOADING_TRUE });
    sortby === 'replies'
      ? (sortedData = _.orderBy(content, (item: TableData) => item.replies.name, ['desc']))
      : (sortedData = _.orderBy(content, [sortby], ['desc']));

    dispatch({
      type: ActionTypes.SORTING_SUCCEED,
      payload: { sortedData, ChangeSortTypeTo: sortingOrder.DESC },
    });
  };
  const reset = () => {
    dispatch({ type: ActionTypes.RESET_SORT });
  };

  const Sorting = (sortby: string) => {
    switch (sort.sortType) {
      case sortingOrder.DEFAULT:
        return sortASC(sortby);
      case sortingOrder.ASC:
        return sortDESC(sortby);
      case sortingOrder.DESC:
        return reset();
    }
  };

  return { Sorting };
};

export default useSort;
