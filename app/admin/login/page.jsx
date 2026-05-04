"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    if (!password) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/products");
    } else {
      setError("Wrong password.");
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#111",
    }}>
      <div style={{
        background: "#1a1a1a", padding: 40, borderRadius: 12,
        width: 340, boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}>
        <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>🛍️ Admin Panel</h1>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 24 }}>Enter your password</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              padding: "11px 14px", background: "#222", border: "1px solid #333",
              borderRadius: 8, color: "#fff", fontSize: 14, outline: "none",
            }}
          />
          {error && <p style={{ color: "#f87171", fontSize: 13, margin: 0 }}>{error}</p>}
          <button onClick={handleLogin} disabled={loading} style={{
            padding: "11px", background: "#fff", color: "#111", border: "none",
            borderRadius: 8, fontWeight: 700, fontSize: 14,
            cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1,
          }}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
