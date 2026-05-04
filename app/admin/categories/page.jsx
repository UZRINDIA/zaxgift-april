"use client";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((data) => { setCategories(data); setLoading(false); });
  }, []);

  async function add() {
    if (!newName.trim()) return;
    setAdding(true);
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim() }),
    });
    const data = await res.json();
    setCategories((p) => [...p, data]);
    setNewName("");
    setAdding(false);
  }

  async function remove(id) {
    if (!confirm("Delete this category?")) return;
    await fetch(`/api/categories/${id}`, { method: "DELETE" });
    setCategories((p) => p.filter((c) => c._id !== id));
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Categories</h1>

      {/* Add new */}
      <div style={{ background: "#fff", borderRadius: 10, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.07)", marginBottom: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Add Category</p>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="e.g. Wallets"
            style={{
              flex: 1, padding: "9px 12px", border: "1px solid #ddd",
              borderRadius: 7, fontSize: 14, outline: "none",
            }}
          />
          <button onClick={add} disabled={adding || !newName.trim()} style={{
            padding: "9px 18px", background: "#111", color: "#fff", border: "none",
            borderRadius: 7, cursor: "pointer", fontWeight: 600, fontSize: 13,
            opacity: adding || !newName.trim() ? 0.5 : 1,
          }}>
            {adding ? "..." : "Add"}
          </button>
        </div>
      </div>

      {/* List */}
      <div style={{ background: "#fff", borderRadius: 10, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
        <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>All Categories ({categories.length})</p>
        {loading ? <p style={{ color: "#888", fontSize: 13 }}>Loading...</p> : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {categories.map((c) => (
              <div key={c._id} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 14px", background: "#f8f8f8", borderRadius: 7,
              }}>
                <span style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</span>
                <button onClick={() => remove(c._id)} style={{
                  padding: "4px 12px", background: "#fee2e2", border: "none",
                  borderRadius: 6, fontSize: 12, color: "#991b1b", cursor: "pointer",
                }}>Delete</button>
              </div>
            ))}
            {categories.length === 0 && <p style={{ color: "#aaa", fontSize: 13 }}>No categories yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
