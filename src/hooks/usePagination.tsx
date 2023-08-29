import { useContext } from "react";
import { Context, ContextValue } from "../Components/store/Ctx";
import { ActionTypes } from "../Components/store/reducer";
import { TableData } from "../Components/store/reducerTypes";

interface usePaginationOutput {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  getPageItems: () => TableData[];
  startRow: number;
  endRow: number;
}

const usePagination = (
  content: TableData[],
  itemsPerPage: number
): usePaginationOutput => {
  const totalItems = content.length;
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;
  const currentPage = state.pagination.currentPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch({ type: ActionTypes.CHANGE_PAGE, payload: currentPage + 1 });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: ActionTypes.CHANGE_PAGE, payload: currentPage - 1 });
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch({ type: ActionTypes.CHANGE_PAGE, payload: page });
    }
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return content.slice(startIndex, endIndex);
  };

  const startRow = (currentPage - 1) * itemsPerPage + 1;
  const endRow = Math.min(currentPage * itemsPerPage, content.length);
  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    startRow,
    endRow,
  };
};

export default usePagination;
