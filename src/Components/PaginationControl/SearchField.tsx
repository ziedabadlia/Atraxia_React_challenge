import { TextField, InputAdornment } from "@mui/material";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useFilterData from "../../hooks/useFilterData";
import { Context, ContextValue } from "../store/Ctx";
import { ActionTypes } from "../store/reducer";

const SearchField = () => {
  const { state, dispatch } = useContext<ContextValue | undefined>(Context)!;
  const { filterByTitle, reset } = useFilterData();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypes.CHANGE_INPUT, payload: event.target.value });
    state.input !== "" ? filterByTitle(state.input) : reset();
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
      sx={{
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          borderColor: "#FFF",
          borderRadius: "20px !important",
          border: "1px solid #FFF",
          height: "60px",
        },
        "& .css-aeeyth-MuiInputBase-input-MuiOutlinedInput-input": {
          color: "black",
        },

        bgcolor: "#f2f2f2",
        borderRadius: "20px",
        "&:focus": {
          bgcolor: "#FFF !important",
        },
      }}
    />
  );
};

export default SearchField;
