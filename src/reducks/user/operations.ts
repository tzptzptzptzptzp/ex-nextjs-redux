import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const data = await res.json();
  return data;
});
