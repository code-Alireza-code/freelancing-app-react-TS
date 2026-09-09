import TextField from "@/ui/TextField";
import { FormProvider, useForm } from "react-hook-form";
import {
  CreateProjectSchema,
  type CreateProjectFormDataType,
} from "../schema/createProject";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "@/ui/Select";
import Button from "@/ui/Button";
import DatePicker from "@/components/DatePicker";
import { useGetAllCategoriesAsOptions } from "@/queries/categoryQueries";
import TagsInput from "@/ui/TagsInput";
import { useCreateProject } from "../queries/projectQueries";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export function CreateProjectForm() {
  const hookform = useForm<CreateProjectFormDataType>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      title: "",
      budget: "",
      category: "",
      deadline: new Date(),
      description: "",
      tags: null,
    },
  });
  const navigate = useNavigate();
  const categoriesAsOptions = useGetAllCategoriesAsOptions();

  const { createProject, isCreating } = useCreateProject();

  const handleCreateProject = async (data: CreateProjectFormDataType) => {
    try {
      const result = await createProject({
        ...data,
        deadline: data.deadline.toISOString(),
      });
      toast.success(result?.data?.message || "پروژه با موفقیت ایجاد شد !");
      navigate({ to: "/owner/projects" });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "خطایی رخ داد !");
    }
  };

  return (
    <div className="bg-secondary-0 p-6 flex flex-col gap-y-8 rounded-xl max-w-xl">
      <h1 className="text-2xl font-bold text-secondary-900">
        ایجاد پروژه جدید
      </h1>
      <FormProvider {...hookform}>
        <form
          noValidate
          className="flex flex-col max-w-lg gap-y-6"
          onSubmit={hookform.handleSubmit(handleCreateProject)}
        >
          <TextField<CreateProjectFormDataType>
            name="title"
            label="عنوان پروژه"
          />
          <TextField<CreateProjectFormDataType>
            name="description"
            label="توضیحات پروژه"
          />
          <TextField<CreateProjectFormDataType>
            name="budget"
            label="بودجه پروژه"
            inputMode="numeric"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
          <TagsInput name="tags" label="تگ ها" />
          <DatePicker name="deadline" label="ددلاین پروژه" />
          <Select
            name="category"
            label="دسته بندی"
            options={categoriesAsOptions}
            placeholder="یک دسته بندی انتخاب کنید "
          />
          <Button
            className="mt-4"
            type="submit"
            loading={isCreating}
            loadingContent="در حال ایجاد پروژه"
          >
            ایجاد پروژه
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
