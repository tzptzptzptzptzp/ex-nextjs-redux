"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/reducks/store";

export const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h3>User Profile</h3>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};
