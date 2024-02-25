"use client";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/reducks/store";

export const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div className="flex gap-2">
        <h3>User Profile</h3>
        <Link className=" hover:text-blue-400" href="/user/detail">
          →
        </Link>
      </div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};
