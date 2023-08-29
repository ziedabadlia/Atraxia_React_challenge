import { Action, State } from "./reducerTypes";

export const initialState: State = {
  tableData: [],
  modifiedData: [],
  DropDownMenuNumbers: {
    all: 0,
    open: 0,
    resolved: 0,
    feedback: 0,
  },
  status: {
    loading: true,
    error: false,
  },
  input: "",
  sort: {
    isSorted: false,
    sortType: "DEFAULT",
  },
  filter: {
    isFiltred: false,
    filtredData: [],
    TicketsNotFound: false,
  },
  pagination: {
    itemsPerPage: 7,
    currentPage: 1,
  },
};

export const ActionTypes = {
  FETCHING_SUCCESS: "FETCHING_SUCCESS",
  FETCHING_ERROR: "FETCHING_ERROR",
  LOADING_TRUE: "LOADING_TRUE",
  FILTER_SUCCESS: "FILTER_SUCCESS",
  CHANGE_INPUT: "CHANGE_INPUT",
  SORTING_SUCCEED: "SORTING_SUCCEED",
  RESET_SORT: "RESET_SORT",
  RESET: "RESET",
  CHANGE_PAGE: "CHANGE_PAGE",
  CLEAR_INPUT: "CLEAR_INPUT",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        tableData: action.payload.tableData,
        modifiedData: [],
        DropDownMenuNumbers: action.payload.DropDownMenuNumbers,
        status: { loading: false, error: false },
      };
    case ActionTypes.FETCHING_ERROR:
      return {
        ...state,
        status: {
          loading: false,
          error: true,
        },
      };
    case ActionTypes.LOADING_TRUE:
      return {
        ...state,
        status: {
          loading: true,
          error: false,
        },
      };
    case ActionTypes.FILTER_SUCCESS:
      return {
        ...state,
        modifiedData: action.payload,
        status: { loading: false, error: false },
        filter: {
          isFiltred: true,
          filtredData: action.payload,
          TicketsNotFound:
            state.modifiedData.length === 0 && state.input !== ""
              ? true
              : false,
        },
      };
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ActionTypes.SORTING_SUCCEED:
      return {
        ...state,
        status: {
          loading: false,
          error: false,
        },
        modifiedData: action.payload.sortedData,
        sort: {
          sortType: action.payload.ChangeSortTypeTo,
          isSorted: true,
        },
      };
    case ActionTypes.RESET_SORT:
      return {
        ...state,
        status: {
          loading: false,
          error: false,
        },
        modifiedData: state.filter.isFiltred ? state.filter.filtredData : [],
        sort: {
          sortType: "DEFAULT",
          isSorted: false,
        },
      };
    case ActionTypes.RESET:
      return {
        ...state,
        modifiedData: [],
        sort: {
          sortType: "DEFAULT",
          isSorted: false,
        },
        filter: {
          isFiltred: false,
          filtredData: [],
          TicketsNotFound: false,
        },
      };
    case ActionTypes.CHANGE_PAGE:
      console.log("action.payload", action.payload);
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    case ActionTypes.CLEAR_INPUT:
      return {
        ...state,
        input: "",
      };
    default:
      return state;
  }
};

export { reducer };
