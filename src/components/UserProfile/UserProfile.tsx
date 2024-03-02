"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userSelector } from "@/reducks/user/selectors";

export const UserProfile = () => {
  const { user, loading } = userSelector();

  const path = usePathname();

  if (loading) return <div>...loading</div>;

  return (
    <div>
      <div className="flex gap-2">
        <h3>User Profile</h3>
        {path === "/" && (
          <Link className=" hover:text-blue-400" href="/user/detail">
            →
          </Link>
        )}
      </div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      {path !== "/" && (
        <div className="mt-4 text-center">
          <Link href={"/"}>- HOME -</Link>
        </div>
      )}
    </div>
  );
};
