"use client";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

export default function CollectionsSection() {
  const { products } = useAppContext();

  // Unique categories from MongoDB products
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Representative images
  const categoryImages = {};
  products.forEach((p) => {
    if (!categoryImages[p.category]) {
      categoryImages[p.category] = p.images?.[0] || p.image?.[0];
    }
  });

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center">
          {categories.map((cat) => (
            <Link
              href={`/category/${cat}`}
              key={cat}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 flex items-center justify-center transition border-gray-200 group-hover:scale-105">
                {cat === "All" ? (
                  <span className="text-sm font-semibold">All</span>
                ) : (
                  <Image
                    src={categoryImages[cat]}
                    alt={cat}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <p className="mt-2 text-sm font-medium">{cat}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}