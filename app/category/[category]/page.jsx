"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { productsDummyData } from "@/assets/assets";

const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const rawParam = Array.isArray(params.category) ? params.category[0] : params.category;

  const isAll = slugify(rawParam) === "all";

  const filtered = isAll
    ? productsDummyData
    : productsDummyData.filter((p) => slugify(p.category) === slugify(rawParam));

  const displayName = isAll
    ? "All"
    : productsDummyData.find((p) => slugify(p.category) === slugify(rawParam))?.category || rawParam;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 capitalize">{displayName} Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
                key={product._id}
              onClick={() => {
                router.push(`/product/${product._id}`);
                window.scrollTo(0, 0);

              }}
              className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative w-full h-auto aspect-square">
                <Image
                  src={Array.isArray(product.image) ? product.image[0] : product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">₹{product.offerPrice ?? product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
