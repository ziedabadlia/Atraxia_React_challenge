import useGenerateData from "./useGenerateData";
import { createServer } from "miragejs";
import { ActionTypes } from "../Components/store/reducer";
import { useContext } from "react";
import { Context } from "../Components/store/Ctx";

let server = createServer();

const useFetchData = (number: number) => {
  const data = useGenerateData(number);
  const { dispatch }: any = useContext(Context);

  const fetchData = async (url: string) => {
    server.get(url, data);
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: ActionTypes.FETCHING_SUCCESS,
        payload: json,
      });
      return;
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: ActionTypes.FETCHING_ERROR });
      throw error;
    }
  };

  return { fetchData };
};

export default useFetchData;
