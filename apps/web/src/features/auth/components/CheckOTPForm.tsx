import { FormProvider, useForm } from "react-hook-form";
import { CheckOtpSchema, type CheckOtpDataType } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { useEffect } from "react";
import { LuArrowRight } from "react-icons/lu";
import ButtonIcon from "@/ui/ButtonIcon";
import { useCountdown } from "@/hooks/useCountdown";
import { formatTime } from "@/utils/timeFormatter";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useCheckOTP, useResendOTP } from "../queries/authQueries";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { UserRoles } from "../types/userRole";

type CheckOTPFormProps = {
  onBack: () => void;
  phoneNumber: string;
};

export default function CheckOTPForm({
  onBack,
  phoneNumber,
}: CheckOTPFormProps) {
  const { start, isFinished, remaining } = useCountdown(
    import.meta.env.VITE_OTP_EXPIRATION_TIME,
  );
  useEffect(() => {
    start();
  }, [start]);

  const navigate = useNavigate();

  const { checkOTP, isCheckingOTP } = useCheckOTP();
  const hookForm = useForm<CheckOtpDataType>({
    resolver: zodResolver(CheckOtpSchema),
    defaultValues: {
      otp: "",
    },
  });
  const handleCheckOTP = async (data: CheckOtpDataType) => {
    try {
      const { user } = await checkOTP({ ...data, phoneNumber });
      console.log(user);
      if (user.isActive) {
        // push to panel based on role
        // if(user.role === UserRoles.FREELANCER) {
        //   navigate({to:"/freelancer"})
        // }
        // if(user.role === UserRoles.OWNER) {
        //   navigate({to:"/owner"})
        // }
        navigate({ to: "/" });
      } else {
        navigate({ to: "/complete-profile" });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "something went wrong");
    }
  };

  // handle resendOtp
  const { resendOTP, isResendingOTP } = useResendOTP();
  const handleResendOtp = async () => {
    try {
      await resendOTP({ phoneNumber });
      start();
    } catch (error) {}
  };

  return (
    <div className="w-full">
      <ButtonIcon className="absolute -top-5" onClick={onBack}>
        <LuArrowRight className="size-5" />
      </ButtonIcon>
      <FormProvider {...hookForm}>
        <h3 className="mb-4">کد تایید را وارد کنید</h3>
        <form
          className="space-y-8"
          noValidate
          onSubmit={hookForm.handleSubmit(handleCheckOTP)}
        >
          <TextField<CheckOtpDataType>
            name="otp"
            label="کد تایید"
            inputMode="numeric"
            maxLength={6}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
            labelClassName="font-thin opacity-50 text-sm"
          />
          <div className="text-center text-sm">
            {isFinished ? (
              <button
                type="button"
                className="underline underline-offset-4 hover:text-primary-800 disabled:text-secondary-300 disabled:bg-secondary-0"
                disabled={isResendingOTP}
                onClick={handleResendOtp}
              >
                <span>ارسال مجدد کد</span>
              </button>
            ) : (
              <span>
                زمان باقیمانده :‌ {toPersianNumbers(formatTime(remaining))}
              </span>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            className="font-medium text-sm disabled:bg-secondary-400"
            loading={isCheckingOTP}
            loadingContent="درحال ارسال اطلاعات ..."
          >
            تایید
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
