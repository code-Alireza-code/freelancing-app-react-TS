import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "../services/profileService";
import type { CompleteProfileDataType } from "../schema/completeProfileSchema";
import { toast } from "sonner";

export const useCompleteProfile = () => {
  const { mutateAsync: CompleteProfile, isPending: isCompletingProfile } =
    useMutation({
      mutationFn: (data: CompleteProfileDataType) => completeProfileApi(data),
      onSuccess: (data) => {
        toast.success(data?.message || "پروفایل با موفقیت تکمیل شد !");
      },
    });
  return { CompleteProfile, isCompletingProfile };
};
