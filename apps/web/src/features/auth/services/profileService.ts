import http from "@/services/httpService";
import type { CompleteProfileDataType } from "../schema/completeProfileSchema";

export async function completeProfileApi(data: CompleteProfileDataType) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}
