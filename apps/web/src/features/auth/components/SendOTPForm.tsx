import { FormProvider, useForm } from "react-hook-form";
import { SendOtpSchema, type SendOtpDataType } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { useSendOTP } from "../queries/authQueries";
import { toast } from "sonner";

type SendOTPFormProps = {
  onSuccess: (phoneNumber: string) => void;
};

export default function SendOTPForm({ onSuccess }: SendOTPFormProps) {
  const { sendOTP, isSendingOTP } = useSendOTP();
  const hookForm = useForm<SendOtpDataType>({
    resolver: zodResolver(SendOtpSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const handleSendOTP = async (data: SendOtpDataType) => {
    try {
      await sendOTP(data);
      onSuccess(data.phoneNumber);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "something went wrong");
    }
  };

  return (
    <div>
      <FormProvider {...hookForm}>
        <h3 className="mb-4">ورود یا ثبت نام در فریلسنیگ اپ</h3>
        <form
          className="space-y-8"
          noValidate
          onSubmit={hookForm.handleSubmit(handleSendOTP)}
        >
          <TextField<SendOtpDataType>
            name="phoneNumber"
            label="شماره موبایل"
            labelClassName="font-thin opacity-50 text-sm"
            inputMode="numeric"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
          <Button
            type="submit"
            variant="primary"
            className="font-medium text-sm disabled:bg-secondary-400"
            loading={isSendingOTP}
            loadingContent="درحال ورود ."
          >
            ورود به فریلنسینگ اپ
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
