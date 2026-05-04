import ProductForm from "@/components/admin/ProductForm";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export default async function NewProductPage() {
  await connectDB();
  const categories = await Category.find().sort({ name: 1 }).lean();
  const cats = JSON.parse(JSON.stringify(categories));
  return <ProductForm categories={cats} />;
}
