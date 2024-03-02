import { useSelector } from "react-redux";
import { RootState } from "../store";

export const userSelector = () => {
  const state = useSelector((state: RootState) => state);

  return {
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
    errorMessage: state.user.errorMessage,
  };
};
