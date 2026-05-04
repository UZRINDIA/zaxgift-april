"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const rawParam = Array.isArray(params.category) ? params.category[0] : params.category;
  const isAll = slugify(rawParam) === "all";

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false); });
  }, []);

  const filtered = isAll
    ? products
    : products.filter((p) => slugify(p.category) === slugify(rawParam));

  const displayName = isAll
    ? "All"
    : products.find((p) => slugify(p.category) === slugify(rawParam))?.category || rawParam;

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 capitalize">{displayName} Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => {
            const image = Array.isArray(product.images) ? product.images[0] : product.image;
            return (
              <div
                key={product._id}
                onClick={() => { router.push(`/product/${product._id}`); window.scrollTo(0, 0); }}
                className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative w-full h-auto aspect-square">
                  <Image
                    src={image}
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
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}