import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const data = await res.json();
  return data;
});
