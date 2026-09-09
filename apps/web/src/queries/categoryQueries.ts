import { getAllCategoriesApi } from "@/services/categoryService";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getAllCategoriesQueryOptions = () =>
  queryOptions({
    queryFn: getAllCategoriesApi,
    queryKey: ["categories"],
  });

export const useGetAllCategoriesAsOptions = () => {
  const { data: categories } = useQuery(getAllCategoriesQueryOptions());

  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.title,
  }));

  return categoryOptions || [];
};
