import { useDispatch } from "react-redux";
import useSWR from "swr";

import { updateUser } from "@/reducks/user/slice";
import { userMockData } from "@/data/user.data";
import { UserProfile } from "../UserProfile/UserProfile";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Content = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateUser(userMockData));
  };

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/user/1",
    fetcher
  );

  console.log(data);

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
