"use server";

import Database from "better-sqlite3";
import { redirect } from "next/navigation";
const db = new Database("ecomdemo.db");

export const addProduct = async (formData) => {
  const product = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: "test",
  };
  db.prepare(
    "INSERT INTO products (name,description,price,image) VALUES (@name,@description,@price,@image)"
  ).run(product);
  redirect("/admin/product");
};

export const getAllProducts = async () => {
  const allProducts = db.prepare("SELECT * FROM products").all();
  console.log(allProducts);
  return allProducts;
};
