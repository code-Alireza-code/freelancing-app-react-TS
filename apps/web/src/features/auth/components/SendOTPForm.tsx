import { FormProvider, useForm } from "react-hook-form";
import { SendOtpSchema, type SendOtpDataType } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import type { Dispatch } from "react";
import type { AuthStep } from "../types/authSteps";

type SendOTPFormProps = {
  setStep: Dispatch<React.SetStateAction<AuthStep>>;
};

export default function SendOTPForm({ setStep }: SendOTPFormProps) {
  const hookForm = useForm<SendOtpDataType>({
    resolver: zodResolver(SendOtpSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  const onSubmit = (data: SendOtpDataType) => {
    console.log(data.phoneNumber);
    setStep("check-otp");
  };

  return (
    <div>
      <FormProvider {...hookForm}>
        <h3 className="mb-4">ورود یا ثبت نام در فریلسنیگ اپ</h3>
        <form
          className="space-y-8"
          noValidate
          onSubmit={hookForm.handleSubmit(onSubmit)}
        >
          <TextField<SendOtpDataType>
            name="phoneNumber"
            label="شماره موبایل"
            labelClassName="font-thin opacity-50 text-sm"
          />
          <Button
            type="submit"
            variant="primary"
            className="font-medium text-sm"
          >
            ورود به فریلسینگ اپ
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
