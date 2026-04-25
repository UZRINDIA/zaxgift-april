/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: [
        "page.tsx",
        "page.ts",
        "page.jsx",
        "page.js",
        "ts",   // Add this for not-found.ts
        "tsx",  // Add this for not-found.tsx
        "js",   // Add this for not-found.js
        "jsx"   // Add this for not-found.jsx
    ],
};

export default nextConfig;
