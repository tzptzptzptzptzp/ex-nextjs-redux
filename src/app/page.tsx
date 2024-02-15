"use client";
import { Provider, useDispatch } from "react-redux";

import { store } from "@/reducks/store";
import { Content } from "@/components/Content/Content";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex items-center justify-center w-screen h-screen">
        <Content />
      </main>
    </Provider>
  );
}
