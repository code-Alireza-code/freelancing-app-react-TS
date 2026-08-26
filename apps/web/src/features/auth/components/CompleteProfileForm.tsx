import { FormProvider, useForm } from "react-hook-form";
import {
  CompleteProfileSchema,
  type CompleteProfileDataType,
} from "../schema/completeProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormCard from "@/components/FormCard";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import RadioGroup from "@/ui/RadioGroup";
import { UserRoles, type UserRoleType } from "../types/userRole";
import { useCompleteProfile } from "../queries/profileQueries";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export default function CompleteProfileForm() {
  const hookForm = useForm<CompleteProfileDataType>({
    resolver: zodResolver(CompleteProfileSchema),
    defaultValues: {
      email: "",
      name: "",
      // role: UserRoles.FREELANCER,
    },
  });

  const { CompleteProfile, isCompletingProfile } = useCompleteProfile();
  const navigate = useNavigate();

  const handleCompleteProfile = async (data: CompleteProfileDataType) => {
    try {
      await CompleteProfile(data);
      navigate({ to: "/" });
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "مشکلی پیش آمده, مجددا تلاش کنید !",
      );
    }
  };

  return (
    <FormCard>
      <FormProvider {...hookForm}>
        <form
          noValidate
          className="space-y-8"
          onSubmit={hookForm.handleSubmit(handleCompleteProfile)}
        >
          <TextField<CompleteProfileDataType>
            name="name"
            label="نام و نام خانوادگی"
          />
          <TextField<CompleteProfileDataType> name="email" label="ایمیل" />
          <RadioGroup<CompleteProfileDataType, UserRoleType>
            name="role"
            options={[
              { label: "فریلنسر", value: UserRoles.FREELANCER },
              { label: "کارفرما", value: UserRoles.OWNER },
            ]}
            className="justify-around"
          />

          <Button type="submit" loading={isCompletingProfile}>
            تکمیل پروفایل
          </Button>
        </form>
      </FormProvider>
    </FormCard>
  );
}
