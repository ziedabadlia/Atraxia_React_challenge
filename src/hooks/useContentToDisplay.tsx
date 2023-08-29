import { useContext } from "react";
import { Context, ContextValue } from "../Components/store/Ctx";
import { TableData } from "../Components/store/reducerTypes";

interface useContentOutput {
  content: TableData[];
}

const useContentToDisplay = (): useContentOutput => {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  const { tableData, modifiedData, input } = state;

  // Use a more descriptive variable name for clarity
  let displayedContent: TableData[];

  if (input.trim() === "" && modifiedData.length === 0) {
    // When there's no input, display the original table data
    displayedContent = tableData;
  } else if (modifiedData.length > 0) {
    // If modifiedData is available, display it
    displayedContent = modifiedData;
  } else {
    // Fallback to displaying the original table data if none of the above conditions are met
    displayedContent = tableData;
  }

  return {
    content: displayedContent,
  };
};

export default useContentToDisplay;
