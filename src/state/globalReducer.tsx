import { Action, State } from '../Types';
import ActionTypes from './Actions/actions';

export const initialState: State = {
  tableData: [],
  modifiedData: [],
  DropDownMenu: {
    DropDownMenuNumbers: {
      all: 0,
      open: 0,
      resolved: 0,
      feedback: 0,
    },
    shouldExecuteCountData: true,
    dataToCount: 'TABLE_DATA',
  },
  status: {
    loading: true,
    error: false,
  },
  input: '',
  sort: {
    isSorted: false,
    sortType: 'DEFAULT',
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

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        tableData: action.payload.tableData,
        modifiedData: [],
        DropDownMenu: {
          ...state.DropDownMenu,
          DropDownMenuNumbers: action.payload.DropDownMenuNumbers,
        },
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
          TicketsNotFound: state.modifiedData.length === 0 && state.input !== '' ? true : false,
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
          sortType: 'DEFAULT',
          isSorted: false,
        },
      };
    case ActionTypes.RESET:
      return {
        ...state,
        modifiedData: [],
        sort: {
          sortType: 'DEFAULT',
          isSorted: false,
        },
        filter: {
          isFiltred: false,
          filtredData: [],
          TicketsNotFound: false,
        },
      };
    case ActionTypes.CHANGE_PAGE:
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
        input: '',
      };
    case ActionTypes.CHANGE_DROPDOWN_MENU_NUMBERS:
      return {
        ...state,
        DropDownMenu: {
          ...state.DropDownMenu,
          DropDownMenuNumbers: action.payload,
        },
      };
    case ActionTypes.CHANGE_SHOULD_EXECUTE_COUNT_DATA:
      return {
        ...state,
        DropDownMenu: {
          ...state.DropDownMenu,
          shouldExecuteCountData: action.payload,
        },
      };
    case ActionTypes.CHANGE_DATA_TO_COUNT:
      return {
        ...state,
        DropDownMenu: {
          ...state.DropDownMenu,
          dataToCount: action.payload,
        },
      };
    default:
      return state;
  }
};

export { reducer };
