import { sendOtp } from "@/features/auth/services/authService";
import { useMutation } from "@tanstack/react-query";
import type { SendOtpDataType } from "../schema/authSchema";
import { toast } from "sonner";

export const useSendOTP = () => {
  const { mutateAsync: sendOTP, isPending: isSendingOTP } = useMutation({
    mutationFn: (data: SendOtpDataType) => sendOtp(data),
    retry: 2,
    onSuccess: (data) => {
      //! for exprimental use !
      toast.info(data.message ?? "");
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });
  return { sendOTP, isSendingOTP };
};
