import useGenerateData from "./useGenerateData";
import { createServer } from "miragejs";

import { ActionTypes } from "../Components/store/reducer";
import { useContext } from "react";
import { Context } from "../Components/store/Ctx";

const data = useGenerateData(8);
createServer({
  routes() {
    this.get("api/data", () => {
      return data;
    });
  },
});

const useFetchData = () => {
  const { dispatch }: any = useContext(Context);

  const fetchData = async (url: string) => {
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
