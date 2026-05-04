import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number },
    category: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", ProductSchema);
