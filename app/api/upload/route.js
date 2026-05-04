import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images");

    if (!files.length)
      return NextResponse.json({ error: "No files" }, { status: 400 });

    const uploadDir = path.join(process.cwd(), "public/uploads/products");
    await mkdir(uploadDir, { recursive: true });

    const urls = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const ext = path.extname(file.name) || ".jpg";
      const base = path.basename(file.name, ext).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const fileName = `${base}-${Date.now()}${ext}`;
      await writeFile(path.join(uploadDir, fileName), buffer);
      urls.push(`/uploads/products/${fileName}`);
    }

    return NextResponse.json({ urls });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
