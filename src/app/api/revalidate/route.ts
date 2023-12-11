import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidatePath("/");
  return NextResponse.json({ status: "Ok" }, { status: 200 });
}
