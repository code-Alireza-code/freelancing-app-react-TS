import { checkOtpApi, sendOtpApi } from "@/features/auth/services/authService";
import { useMutation } from "@tanstack/react-query";
import type { CheckOtpDto, SendOtpDataType } from "../schema/authSchema";
import { toast } from "sonner";

export const useSendOTP = () => {
  const { mutateAsync: sendOTP, isPending: isSendingOTP } = useMutation({
    mutationFn: (data: SendOtpDataType) => sendOtpApi(data),
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

export const useCheckOTP = () => {
  const { mutateAsync: checkOTP, isPending: isCheckingOTP } = useMutation({
    mutationFn: (data: CheckOtpDto) => checkOtpApi(data),
    onSuccess: (data) => {
      //! for exprimental use !
      toast.info(data.message ?? "");
    },
    onError: (data) => {
      toast.error(data.message ?? "something went wrong, try again !");
    },
  });
  return { checkOTP, isCheckingOTP };
};

export const useResendOTP = () => {
  const { mutateAsync: resendOTP, isPending: isResendingOTP } = useMutation({
    mutationFn: (data: SendOtpDataType) => sendOtpApi(data),
    onSuccess: (data) => {
      //! for exprimental use !
      toast.info(data.message ?? "");
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });
  return { resendOTP, isResendingOTP };
};
