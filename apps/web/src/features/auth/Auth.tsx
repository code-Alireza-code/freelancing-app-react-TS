import { useState } from "react";
import CheckOTPForm from "./components/CheckOTPForm";
import SendOTPForm from "./components/SendOTPForm";
import type { AuthStep } from "./types/authSteps";

export default function Auth() {
  const [step, setStep] = useState<AuthStep>("check-otp");
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="border rounded-lg border-gray-200 w-sm p-4 mx-2 sm:mx-auto sm:p-10">
        <div className="flex flex-col relative items-center *:w-full">
          <h1 className="text-center font-bold text-lg text-primary-900 -mt-6 mb-12">
            فریلنسینگ اپ
          </h1>
          {step === "send-otp" ? (
            <SendOTPForm setStep={setStep} />
          ) : (
            <CheckOTPForm setStep={setStep} />
          )}
        </div>
      </div>
    </div>
  );
}
