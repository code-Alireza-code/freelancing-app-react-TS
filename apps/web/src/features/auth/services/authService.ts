import http from "@/services/httpService";
import type { CheckOtpDataType, SendOtpDataType } from "../schema/authSchema";

export async function sendOtpApi(data: SendOtpDataType) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
export async function checkOtpApi(data: CheckOtpDataType) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
