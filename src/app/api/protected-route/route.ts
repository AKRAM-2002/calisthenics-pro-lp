import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = getAuth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Your protected API logic here
  return NextResponse.json({ message: "This is a protected API route" });
}


