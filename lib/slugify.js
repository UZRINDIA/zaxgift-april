// lib/slugify.js
export function slugify(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
