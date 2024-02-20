import { useDispatch } from "react-redux";

import { AppDispatch } from "@/reducks/store";
import { getUser } from "@/reducks/user/operations";

import { Counter } from "../Counter/Counter";
import { UserProfile } from "../UserProfile/UserProfile";

export const Content = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(getUser("2")).catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col gap-4 w-96 p-8 shadow-lg">
      <UserProfile />
      <Counter />
      <button
        className="w-4/5 mx-auto py-1 bg-blue-500 text-white rounded-md"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
};
