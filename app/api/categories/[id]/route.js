import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export async function DELETE(_, { params }) {
  await connectDB();
  await Category.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
