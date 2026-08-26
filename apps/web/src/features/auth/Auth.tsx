import { useState } from "react";
import CheckOTPForm from "./components/CheckOTPForm";
import SendOTPForm from "./components/SendOTPForm";
import type { AuthStep } from "./types/authSteps";
import FormCard from "@/components/FormCard";

export default function Auth() {
  const [step, setStep] = useState<AuthStep>("send-otp");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <FormCard>
      <h1 className="text-center font-bold text-lg text-primary-900 -mt-6 mb-12">
        فریلنسینگ اپ
      </h1>
      {step === "send-otp" ? (
        <SendOTPForm
          onSuccess={(phoneNumber) => {
            setPhoneNumber(phoneNumber);
            setStep("check-otp");
          }}
        />
      ) : (
        <CheckOTPForm
          onBack={() => {
            setStep("send-otp");
          }}
          phoneNumber={phoneNumber}
        />
      )}
    </FormCard>
  );
}
