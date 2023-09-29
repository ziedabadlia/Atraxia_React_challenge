export interface TableData {
  title: string;
  category: string;
  status: string;
  date: Date;
  replies: {
    name: string;
    number: number;
    isStaff: boolean;
    img: string;
  };
}

export interface DropDownMenuNumbers {
  all: number;
  open: number;
  resolved: number;
  feedback: number;
}

export interface DropDownMenu {
  DropDownMenuNumbers: DropDownMenuNumbers;
  shouldExecuteCountData: boolean;
  dataToCount: 'TABLE_DATA' | 'FILTRED_DATA';
}

export interface State {
  tableData: TableData[] | [];
  modifiedData: TableData[] | [];
  DropDownMenu: DropDownMenu;
  status: {
    loading: boolean;
    error: boolean;
  };
  input: string;
  sort: {
    isSorted: boolean;
    sortType: 'DEFAULT' | 'ASC' | 'DESC';
  };
  filter: {
    isFiltred: boolean;
    filtredData: TableData[];
    TicketsNotFound: boolean;
  };
  pagination: {
    itemsPerPage: number;
    currentPage: number;
  };
}

export type Action = {
  type: string;
  payload?: any;
};
