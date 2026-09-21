import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useNavigate } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import {
  CreateProposalSchema,
  type CreateProposalDataType,
} from "../schema/createProposal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProposal } from "../queries/proposalQueries";
import { Route as CreateProposalRoute } from "@/routes/_dashboardLayout/_freelancerLayout/freelancer/projects/$projectId/proposal/create/index";
import { toast } from "sonner";

export default function CreateProposalForm() {
  const hookform = useForm<CreateProposalDataType>({
    resolver: zodResolver(CreateProposalSchema),
    defaultValues: {
      price: "",
      description: "",
      duration: "",
    },
  });

  const navigate = useNavigate();
  const { projectId } = CreateProposalRoute.useParams();

  const { createProposal, isCreating } = useCreateProposal();

  const handleCreateProposal = async (data: CreateProposalDataType) => {
    try {
      const result = await createProposal({ ...data, projectId });
      toast(result?.message || "پروپوزال با موفقیت ایجاد شد !");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "خطایی پیش آمده, مجددا تلاش کنید !",
      );
    }
  };

  return (
    <div className="bg-secondary-0 p-6 flex flex-col gap-y-8 rounded-xl max-w-xl">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary-900">
          ایجاد پروپوزال
        </h1>
        <button
          className="p-1"
          onClick={() => navigate({ to: "/freelancer/projects" })}
        >
          <FaArrowLeft className="size-5 " />
        </button>
      </div>
      <FormProvider {...hookform}>
        <form
          noValidate
          className="flex flex-col max-w-lg gap-y-6"
          onSubmit={hookform.handleSubmit(handleCreateProposal)}
        >
          <TextField<CreateProposalDataType>
            name="description"
            label="توضیحات پروپوزال"
          />
          <TextField<CreateProposalDataType>
            name="duration"
            label="زمان تحویل"
            inputMode="numeric"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
          <TextField<CreateProposalDataType>
            name="price"
            label="قیمت درخواستی"
            inputMode="numeric"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
          <Button
            className="mt-4"
            type="submit"
            loading={isCreating}
            loadingContent="در حال ایجاد پروژه"
          >
            ایجاد پروپوزال
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
