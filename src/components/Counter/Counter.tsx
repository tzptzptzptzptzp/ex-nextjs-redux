import { useDispatch, useSelector } from "react-redux";
import countSlice from "@/reducks/count/slice";
import { RootState } from "@/reducks/store";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count.count);

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
        <p>{count}</p>
      </div>
      <button onClick={handleIncrement}>＋</button>
    </div>
  );
};
