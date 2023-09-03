import { debounce } from 'lodash';
import { useContext, useEffect, useCallback } from 'react';
import { Context, ContextValue } from '../Components/store/Ctx';
import { ActionTypes } from '../Components/store/reducer';
import { TableData } from '../Components/store/reducerTypes';
import useContentToDisplay from './useContentToDisplay';

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
  };

  const filterByStatus = (input: string) => {
    dispatch({ type: ActionTypes.LOADING_TRUE });
    const filtredData = state.tableData.filter((item: TableData) => item.status === input);
    dispatch({ type: ActionTypes.FILTER_SUCCESS, payload: filtredData });
    dispatch({ type: ActionTypes.CLEAR_INPUT });
  };

  const reset = () => {
    dispatch({ type: ActionTypes.RESET });
  };
  useEffect(() => () => debouncedFilterByTitle.cancel(), [debouncedFilterByTitle]);

  return {
    filterByTitle,
    filterByStatus,
    reset,
  };
};

export default useFilterData;
