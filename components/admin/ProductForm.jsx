"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm({ initial, categories }) {
  const router = useRouter();
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: initial?.name || "",
    description: initial?.description || "",
    price: initial?.price || "",
    offerPrice: initial?.offerPrice || "",
    category: initial?.category || "",
    inStock: initial?.inStock ?? true,
  });

  const [existingImages, setExistingImages] = useState(initial?.images || []);
  const [newFiles, setNewFiles] = useState([]); // { file, preview }
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  function handleFilePick(e) {
    const picked = Array.from(e.target.files || []);
    const withPreviews = picked.map((file) => ({ file, preview: URL.createObjectURL(file) }));
    setNewFiles((p) => [...p, ...withPreviews]);
    e.target.value = ""; // reset so same file can be picked again
  }

  function removeExisting(url) {
    setExistingImages((p) => p.filter((u) => u !== url));
  }

  function removeNew(i) {
    setNewFiles((p) => p.filter((_, idx) => idx !== i));
  }

  async function handleSave() {
    if (!form.name || !form.price || !form.category) {
      setError("Name, price and category are required.");
      return;
    }
    setSaving(true);
    setError("");

    try {
      // 1. upload new images
      let uploadedUrls = [];
      if (newFiles.length > 0) {
        const fd = new FormData();
        newFiles.forEach(({ file }) => fd.append("images", file));
        const up = await fetch("/api/upload", { method: "POST", body: fd });
        const upData = await up.json();
        uploadedUrls = upData.urls || [];
      }

      // 2. save product
      const payload = {
        ...form,
        price: Number(form.price),
        offerPrice: form.offerPrice ? Number(form.offerPrice) : undefined,
        images: [...existingImages, ...uploadedUrls],
      };

      const url = initial ? `/api/products/${initial._id}` : "/api/products";
      const method = initial ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      setError("Something went wrong.");
      setSaving(false);
    }
  }

  const input = {
    width: "100%", padding: "9px 12px", border: "1px solid #ddd",
    borderRadius: 7, fontSize: 14, outline: "none", boxSizing: "border-box",
  };
  const label = { fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 5 };
  const card = {
    background: "#fff", borderRadius: 10, padding: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)", marginBottom: 16,
  };

  return (
    <div style={{ maxWidth: 800 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>{initial ? "Edit Product" : "Add Product"}</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => router.push("/admin/products")} style={{
            padding: "9px 16px", background: "#eee", border: "none",
            borderRadius: 7, cursor: "pointer", fontSize: 13,
          }}>Cancel</button>
          <button onClick={handleSave} disabled={saving} style={{
            padding: "9px 20px", background: "#111", color: "#fff", border: "none",
            borderRadius: 7, cursor: saving ? "not-allowed" : "pointer",
            fontSize: 13, fontWeight: 600, opacity: saving ? 0.7 : 1,
          }}>
            {saving ? "Saving..." : "Save Product"}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: "#fee2e2", color: "#991b1b", padding: "10px 14px", borderRadius: 7, marginBottom: 16, fontSize: 13 }}>
          {error}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* LEFT */}
        <div>
          {/* Basic info */}
          <div style={card}>
            <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>Basic Info</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              <div>
                <label style={label}>Product Name *</label>
                <input name="name" value={form.name} onChange={handleChange} style={input} placeholder="e.g. Blue Cap" />
              </div>

              <div>
                <label style={label}>Category *</label>
                <select name="category" value={form.category} onChange={handleChange} style={input}>
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c._id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <label style={label}>Price (₹) *</label>
                  <input name="price" type="number" value={form.price} onChange={handleChange} style={input} placeholder="999" />
                </div>
                <div>
                  <label style={label}>Offer Price (₹)</label>
                  <input name="offerPrice" type="number" value={form.offerPrice} onChange={handleChange} style={input} placeholder="799" />
                </div>
              </div>

              <label style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 7, cursor: "pointer" }}>
                <input type="checkbox" name="inStock" checked={form.inStock} onChange={handleChange} />
                In Stock
              </label>
            </div>
          </div>

          {/* Description */}
          <div style={card}>
            <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>Description *</p>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              style={{ ...input, resize: "vertical" }}
              placeholder="Describe the product..."
            />
          </div>
        </div>

        {/* RIGHT — Images */}
        <div style={card}>
          <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>Images</p>

          {/* Existing images */}
          {existingImages.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              {existingImages.map((url) => (
                <div key={url} style={{ position: "relative" }}>
                  <img src={url} alt="" style={{ width: 76, height: 76, objectFit: "cover", borderRadius: 6, border: "1px solid #eee" }} />
                  <button onClick={() => removeExisting(url)} style={{
                    position: "absolute", top: -6, right: -6,
                    background: "#ef4444", border: "none", borderRadius: "50%",
                    width: 18, height: 18, color: "#fff", cursor: "pointer", fontSize: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>✕</button>
                </div>
              ))}
            </div>
          )}

          {/* New image previews */}
          {newFiles.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              {newFiles.map(({ preview }, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <img src={preview} alt="" style={{ width: 76, height: 76, objectFit: "cover", borderRadius: 6, border: "2px dashed #3b82f6" }} />
                  <button onClick={() => removeNew(i)} style={{
                    position: "absolute", top: -6, right: -6,
                    background: "#ef4444", border: "none", borderRadius: "50%",
                    width: 18, height: 18, color: "#fff", cursor: "pointer", fontSize: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>✕</button>
                  <span style={{ position: "absolute", bottom: -16, left: 0, right: 0, textAlign: "center", fontSize: 9, color: "#3b82f6" }}>new</span>
                </div>
              ))}
            </div>
          )}

          {/* Upload button */}
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleFilePick} style={{ display: "none" }} />
          <button onClick={() => fileRef.current?.click()} style={{
            width: "100%", padding: 14, border: "2px dashed #ddd",
            borderRadius: 7, background: "#fafafa", cursor: "pointer",
            fontSize: 13, color: "#666",
          }}>
            📁 Click to upload images
          </button>
          <p style={{ fontSize: 11, color: "#aaa", marginTop: 6 }}>
            Multiple images allowed. Blue border = not saved yet.
          </p>
        </div>
      </div>
    </div>
  );
}
