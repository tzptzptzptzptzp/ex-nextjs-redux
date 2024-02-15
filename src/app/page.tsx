"use client";
import { Provider } from "react-redux";
import { store } from "@/reducks/store";
import { UserProfile } from "@/components/UserProfile/UserProfile";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="p-8 shadow-lg">
          <UserProfile />
        </div>
      </main>
    </Provider>
  );
}
