import { NextResponse } from "next/server";

import { usersData } from "@/db/users.db";

type ParamsType = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: ParamsType) {
  const id = parseInt(params.id);
  const foundUser = usersData.find((user) => user.id === id);

  if (!foundUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(foundUser);
}
