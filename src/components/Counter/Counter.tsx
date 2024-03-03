import { useDispatch, useSelector } from "react-redux";
import { countSelector } from "@/reducks/count/selectors";
import countSlice from "@/reducks/count/slice";

export const Counter = () => {
  const dispatch = useDispatch();

  const { count, loading } = countSelector();

  const handleIncrement = () => {
    dispatch(countSlice.actions.incrementCount());
  };
  const handleDecrement = () => {
    dispatch(countSlice.actions.decrementCount());
  };

  return (
    <div className="flex justify-center gap-4 w-full">
      <button onClick={handleDecrement}>ー</button>
      <div>
        <p>{loading ? "...loading" : count}</p>
      </div>
      <button onClick={handleIncrement}>＋</button>
    </div>
  );
};
