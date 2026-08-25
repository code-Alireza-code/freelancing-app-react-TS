import * as z from "zod";

export const SendOtpSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "شماره تلفن الزامی است")
    .regex(/^(?:\+98|0)?9\d{9}$/, {
      error: "شماره تلفن معتبر نیست !",
    }),
});
export type SendOtpDataType = z.infer<typeof SendOtpSchema>;

export const CheckOtpSchema = z.object({
  otp: z
    .string()
    .min(1, "کد ورود الزامی است")
    .regex(/^\d{6}$/, "کد باید ۶ رقم باشد"),
});

export type CheckOtpDataType = z.infer<typeof CheckOtpSchema>;

export type CheckOtpDto = SendOtpDataType & CheckOtpDataType;
