import http from "@/services/httpService";

export async function sendOtp(data: { phoneNumber: string }) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
export async function checkOtp(data: { otp: string }) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
