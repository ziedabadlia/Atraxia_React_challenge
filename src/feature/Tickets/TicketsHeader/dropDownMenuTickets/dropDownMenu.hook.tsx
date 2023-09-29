import { useContext, useState, useEffect } from 'react';
import { Context, ContextValue } from '../../../../state/globalContext';
import { useTheme } from '@mui/material';
import useFilterData from '../../../../hooks/useFilterData';
import { DropDownMenuNumbers, TableData } from '../../../../Types';
import ActionTypes from '../../../../state/Actions/actions';

interface Item {
  title: string;
  number: number;
  color: string;
}

interface useMenuItemsOutput {
  MenuItemsData: Item[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (value: Item | null) => void;
  anchorEl: HTMLElement | null;
  value: Item;
  open: boolean;
  id: string | undefined;
}

interface UseCountMenuItemsDataOutput {
  countData: () => void;
}

export const useCountMenuItemsData = (): UseCountMenuItemsDataOutput => {
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;

  const countData = () => {
    let data: TableData[];
    state.DropDownMenu.dataToCount === 'TABLE_DATA' ? (data = state.tableData) : (data = state.filter.filtredData);
    console.log(data);
    let resolved = 0;
    let open = 0;
    let feedback = 0;

    data.forEach(item => {
      switch (item.status) {
        case 'Open':
          open++;
          break;
        case 'Resolved':
          resolved++;
          break;
        case 'Feedback':
          feedback++;
          break;
        default:
          break;
      }
    });

    const all = data.length;
    const DropDownMenuNumbers: DropDownMenuNumbers = {
      all,
      open,
      resolved,
      feedback,
    };
    dispatch({ type: ActionTypes.CHANGE_DROPDOWN_MENU_NUMBERS, payload: DropDownMenuNumbers });
    dispatch({ type: ActionTypes.CHANGE_SHOULD_EXECUTE_COUNT_DATA, payload: false });
  };

  return {
    countData,
  };
};

const useMenuItems = (): useMenuItemsOutput => {
  const colors = useTheme().palette;
  const { state } = useContext<ContextValue | undefined>(Context)!;
  const { filterByStatus } = useFilterData();
  const { countData } = useCountMenuItemsData();
  const { DropDownMenu } = state;
  const { DropDownMenuNumbers, shouldExecuteCountData } = DropDownMenu;
  console.log(shouldExecuteCountData);
  if (state.tableData.length && shouldExecuteCountData) {
    countData();
  }
  const MenuItemsData = [
    {
      title: 'All Tickets',
      number: DropDownMenuNumbers.all,
      color: '#EEE',
    },
    {
      title: 'Open',
      number: DropDownMenuNumbers.open,
      color: colors.primary.main,
    },
    {
      title: 'Feedback',
      number: DropDownMenuNumbers.feedback,
      color: colors.secondary.main,
    },
    {
      title: 'Resolved',
      number: DropDownMenuNumbers.resolved,
      color: colors.success.main,
    },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [value, setValue] = useState<Item>(MenuItemsData[0]);
  const open = !!anchorEl;
  const id = open ? 'simple-popover' : undefined;
  useEffect(() => {
    setValue(MenuItemsData[0]);
  }, [DropDownMenuNumbers.all]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value: Item | null) => {
    setAnchorEl(null);
    if (value !== null) {
      setValue(value);
    }
    if (value!.title !== 'ALL Tickets') {
      filterByStatus(value!.title);
    }
  };

  return {
    MenuItemsData,
    handleClick,
    handleClose,
    anchorEl,
    value,
    open,
    id,
  };
};

export default useMenuItems;
