import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { unlink } from "fs/promises";
import path from "path";

export async function GET(_, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function DELETE(_, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // delete image files from disk
  for (const imgUrl of product.images || []) {
    try {
      await unlink(path.join(process.cwd(), "public", imgUrl));
    } catch (_) {}
  }

  await product.deleteOne();
  return NextResponse.json({ success: true });
}
