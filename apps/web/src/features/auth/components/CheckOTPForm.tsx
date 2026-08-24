import { FormProvider, useForm } from "react-hook-form";
import { CheckOtpSchema, type CheckOtpDataType } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { useEffect, type Dispatch } from "react";
import type { AuthStep } from "../types/authSteps";
import { LuArrowRight } from "react-icons/lu";
import ButtonIcon from "@/ui/ButtonIcon";
import { useCountdown } from "@/hooks/useCountdown";
import { formatTime } from "@/utils/timeFormatter";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

type CheckOTPFormProps = {
  setStep: Dispatch<React.SetStateAction<AuthStep>>;
};

export default function CheckOTPForm({ setStep }: CheckOTPFormProps) {
  const otpTime = 120;
  const { start, isFinished, remaining } = useCountdown(otpTime);
  useEffect(() => {
    start();
  }, [start]);
  const hookForm = useForm<CheckOtpDataType>({
    resolver: zodResolver(CheckOtpSchema),
    defaultValues: {
      otp: "",
    },
  });
  const onSubmit = (data: CheckOtpDataType) => {
    console.log(data.otp);
  };

  return (
    <div className="w-full">
      <ButtonIcon
        className="absolute -top-5"
        onClick={() => setStep("send-otp")}
      >
        <LuArrowRight className="size-5" />
      </ButtonIcon>
      <FormProvider {...hookForm}>
        <h3 className="mb-4">کد تایید را وارد کنید</h3>
        <form
          className="space-y-8"
          noValidate
          onSubmit={hookForm.handleSubmit(onSubmit)}
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
            {!isFinished ? (
              <button type="button">
                <span className="underline underline-offset-4 hover:text-primary-800">
                  ارسال مجدد کد
                </span>
              </button>
            ) : (
              <span>
                زمان باقیمانده :‌ {toPersianNumbers(formatTime(remaining))}
              </span>
            )}
          </div>
          <Button type="submit" variant="primary">
            تایید
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
