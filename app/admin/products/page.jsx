"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false); });
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this product and its images?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setProducts((p) => p.filter((x) => x._id !== id));
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Products</h1>
          <p style={{ color: "#888", fontSize: 13, marginTop: 2 }}>{products.length} total</p>
        </div>
        <Link href="/admin/products/new" style={{
          background: "#111", color: "#fff", padding: "9px 18px",
          borderRadius: 7, textDecoration: "none", fontWeight: 600, fontSize: 13,
        }}>
          + Add Product
        </Link>
      </div>

      {loading ? (
        <p style={{ color: "#888" }}>Loading...</p>
      ) : products.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#aaa" }}>
          <div style={{ fontSize: 36 }}>📦</div>
          <p style={{ marginTop: 10 }}>No products yet.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {products.map((p) => (
            <div key={p._id} style={{
              background: "#fff", borderRadius: 10, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 14,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}>
              {/* Thumbnail */}
              <div style={{ width: 58, height: 58, borderRadius: 7, overflow: "hidden", background: "#f0f0f0", flexShrink: 0 }}>
                {p.images?.[0]
                  ? <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📦</div>
                }
              </div>

              {/* Name + category */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                <div style={{ color: "#888", fontSize: 12, marginTop: 2 }}>{p.category} • {p.images?.length || 0} images</div>
              </div>

              {/* Price */}
              <div style={{ textAlign: "right", marginRight: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>₹{p.offerPrice || p.price}</div>
                {p.offerPrice && <div style={{ color: "#bbb", fontSize: 11, textDecoration: "line-through" }}>₹{p.price}</div>}
              </div>

              {/* Stock badge */}
              <div style={{
                padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                background: p.inStock ? "#d1fae5" : "#fee2e2",
                color: p.inStock ? "#065f46" : "#991b1b",
              }}>
                {p.inStock ? "In Stock" : "Out of Stock"}
              </div>

              {/* Actions */}
              <Link href={`/admin/products/${p._id}`} style={{
                padding: "6px 13px", background: "#f0f0f0", borderRadius: 6,
                textDecoration: "none", fontSize: 12, fontWeight: 500, color: "#111",
              }}>Edit</Link>
              <button onClick={() => handleDelete(p._id)} style={{
                padding: "6px 13px", background: "#fee2e2", border: "none",
                borderRadius: 6, fontSize: 12, fontWeight: 500, color: "#991b1b", cursor: "pointer",
              }}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
