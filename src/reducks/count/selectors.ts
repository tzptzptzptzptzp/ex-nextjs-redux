import { useSelector } from "react-redux";
import { RootState } from "../store";

export const countSelector = () => {
  const state = useSelector((state: RootState) => state.count);

  return {
    count: state.count,
    loading: state.loading,
    error: state.error,
    errorMessage: state.errorMessage,
  };
};
