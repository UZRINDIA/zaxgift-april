import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export async function GET() {
  await connectDB();
  const categories = await Category.find().sort({ name: 1 });
  return NextResponse.json(categories);
}

export async function POST(req) {
  await connectDB();
  const { name } = await req.json();
  const category = await Category.create({ name });
  return NextResponse.json(category, { status: 201 });
}
