import { useDispatch } from "react-redux";

import { updateUser } from "@/reducks/user/slice";
import { userMockData } from "@/data/user.data";
import { UserProfile } from "../UserProfile/UserProfile";

export const Content = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateUser(userMockData));
  };
  return (
    <div className="flex flex-col gap-4 w-96 p-8 shadow-lg">
      <UserProfile />
      <button
        className="w-4/5 mx-auto py-1 bg-blue-500 text-white rounded-md"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
};
