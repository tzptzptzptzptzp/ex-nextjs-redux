"use client";
import { Provider } from "react-redux";
import { store } from "@/reducks/store";
import { UserProfile } from "@/components/UserProfile/UserProfile";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col gap-4 w-96 p-8 shadow-lg">
          <UserProfile />
          <button className="w-4/5 mx-auto py-1 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </main>
    </Provider>
  );
}
