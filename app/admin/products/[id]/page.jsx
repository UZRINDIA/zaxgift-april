import ProductForm from "@/components/admin/ProductForm";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";

export default async function EditProductPage({ params }) {
  await connectDB();
  const [product, categories] = await Promise.all([
    Product.findById(params.id).lean(),
    Category.find().sort({ name: 1 }).lean(),
  ]);

  if (!product) return <div style={{ padding: 40 }}>Product not found.</div>;

  return (
    <ProductForm
      initial={JSON.parse(JSON.stringify(product))}
      categories={JSON.parse(JSON.stringify(categories))}
    />
  );
}
