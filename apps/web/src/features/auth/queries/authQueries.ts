import {
  checkOtpApi,
  logoutApi,
  sendOtpApi,
} from "@/features/auth/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CheckOtpDto, SendOtpDataType } from "../schema/authSchema";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

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

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    retry: false,
    onSuccess: () => {
      toast.success("با موفقیت از حساب خارج شدید");
      queryClient.clear();
      navigate({ to: "/" });
    },
  });
  return { logout, isPending };
};
