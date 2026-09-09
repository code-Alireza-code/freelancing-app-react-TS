import { CategoriesSchema, type Category } from "@/schemas/category";
import http from "./httpService";

export async function getAllCategoriesApi(): Promise<Category[]> {
  const { categories } = await http
    .get("/category/list")
    .then(({ data }) => data.data);
  return CategoriesSchema.parse(categories);
}
