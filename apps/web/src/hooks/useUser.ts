import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../features/auth/services/authService";

export function useUser() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserApi,
    retry: false,
  });
  return { userData: data, error, isLoading };
}
