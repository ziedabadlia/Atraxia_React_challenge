import { useContext } from 'react';
import { Context, ContextValue } from '../Components/store/Ctx';
import { TableData } from '../Components/store/reducerTypes';

interface useContentOutput {
  content: TableData[];
}

const useContentToDisplay = (): useContentOutput => {
  const { state } = useContext<ContextValue | undefined>(Context)!;
  const { tableData, modifiedData, input } = state;

  let displayedContent: TableData[];

  if (input.trim() === '' && modifiedData.length === 0) {
    displayedContent = tableData;
  } else if (modifiedData.length > 0) {
    displayedContent = modifiedData;
  } else {
    displayedContent = tableData;
  }

  return {
    content: displayedContent,
  };
};

export default useContentToDisplay;
