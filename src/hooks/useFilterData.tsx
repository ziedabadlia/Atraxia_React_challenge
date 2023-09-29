import { debounce } from 'lodash';
import { useContext, useEffect, useCallback } from 'react';
import { Context, ContextValue } from '../state/globalContext';
import ActionTypes from '../state/Actions/actions';
import { TableData } from '../Types';
import { useContentToDisplay } from '../feature/Tickets/TicketsTable/TableContent/table.hooks';

const useFilterData = (): {
  filterByTitle: () => void;
  filterByStatus: (input: string) => void;
  reset: () => void;
} => {
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;
  const { content } = useContentToDisplay();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFilterByTitle = useCallback(
    debounce((input: string) => {
      dispatch({ type: ActionTypes.LOADING_TRUE });

      const filteredData = content.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
      dispatch({ type: ActionTypes.FILTER_SUCCESS, payload: filteredData });
    }, 200),
    [content, dispatch]
  );
  const filterByTitle = () => {
    debouncedFilterByTitle(state.input);
    dispatch({ type: ActionTypes.CHANGE_DATA_TO_COUNT, payload: 'FILTRED_DATA' });
    dispatch({ type: ActionTypes.CHANGE_SHOULD_EXECUTE_COUNT_DATA, payload: true });
  };

  const filterByStatus = (input: string) => {
    dispatch({ type: ActionTypes.LOADING_TRUE });
    const filtredData = state.tableData.filter((item: TableData) => item.status === input);
    dispatch({ type: ActionTypes.FILTER_SUCCESS, payload: filtredData });
    dispatch({ type: ActionTypes.CLEAR_INPUT });
  };

  const reset = () => {
    dispatch({ type: ActionTypes.RESET });
    dispatch({ type: ActionTypes.CHANGE_DATA_TO_COUNT, payload: 'TABLE_DATA' });
    dispatch({ type: ActionTypes.CHANGE_SHOULD_EXECUTE_COUNT_DATA, payload: true });
  };
  useEffect(() => () => debouncedFilterByTitle.cancel(), [debouncedFilterByTitle]);

  return {
    filterByTitle,
    filterByStatus,
    reset,
  };
};

export default useFilterData;
