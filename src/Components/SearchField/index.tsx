import { TextField, InputAdornment } from '@mui/material';
import { searchField } from './index.style';
import { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useFilterData from '../../hooks/useFilterData';
import { Context, ContextValue } from '../../state/globalContext';
import ActionTypes from '../../state/Actions/actions'; 

const SearchField = () => {
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;
  const { filterByTitle, reset } = useFilterData();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypes.CHANGE_INPUT, payload: event.target.value });
    state.input !== '' ? filterByTitle() : reset();
  };

  return (
    <TextField
      value={state.input}
      onChange={handleChange}
      id="outlined-search"
      placeholder="Search Tickets"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      type="search"
      sx={searchField}
    />
  );
};

export default SearchField;
