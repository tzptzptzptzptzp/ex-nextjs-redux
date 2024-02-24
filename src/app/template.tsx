"use client";

import { Provider } from "react-redux";
import { store } from "@/reducks/store";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}
