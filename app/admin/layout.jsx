"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { href: "/admin/products", label: "Products", icon: "📦" },
  { href: "/admin/categories", label: "Categories", icon: "🗂️" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: 210, background: "#111", color: "#fff",
        display: "flex", flexDirection: "column",
        position: "fixed", top: 0, left: 0, bottom: 0,
      }}>
        <div style={{ padding: "24px 20px", fontSize: 16, fontWeight: 700, borderBottom: "1px solid #222" }}>
          🛍️ Admin
        </div>
        <nav style={{ flex: 1, paddingTop: 12 }}>
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "11px 20px", textDecoration: "none",
                color: active ? "#fff" : "#888",
                background: active ? "#1e1e1e" : "transparent",
                borderLeft: `3px solid ${active ? "#fff" : "transparent"}`,
                fontSize: 14, fontWeight: active ? 600 : 400,
              }}>
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
        <button onClick={logout} style={{
          margin: 16, padding: "9px 0", background: "#1e1e1e",
          border: "none", color: "#f87171", cursor: "pointer",
          borderRadius: 6, fontSize: 13,
        }}>
          🚪 Logout
        </button>
      </aside>

      {/* Page content */}
      <main style={{ marginLeft: 210, flex: 1, background: "#f5f5f5", padding: 32, minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
