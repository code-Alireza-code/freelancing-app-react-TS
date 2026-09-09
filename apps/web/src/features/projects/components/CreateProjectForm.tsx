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
import { useCreateProject, useEditProject } from "../queries/projectQueries";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { Project } from "@/schemas/project";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect } from "react";

type Props = {
  edit?: boolean;
  project?: Project;
};

export function CreateProjectForm({ edit, project }: Props) {
  const editMode = edit && project;

  const defaultValues: CreateProjectFormDataType = {
    title: project?.title ?? "",
    budget: project?.budget?.toString() ?? "",
    category: project?.category._id ?? "",
    deadline: new Date(project?.deadline ?? Date.now()),
    description: project?.description ?? "",
    tags: project?.tags ?? null,
  };
  const hookform = useForm<CreateProjectFormDataType>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues,
  });

  useEffect(() => {
    hookform.reset(defaultValues);
  }, [project, hookform]);

  const navigate = useNavigate();
  const categoriesAsOptions = useGetAllCategoriesAsOptions();

  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

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
  const handleEditProject = async (data: CreateProjectFormDataType) => {
    try {
      const result = await editProject({
        data: { ...data, deadline: data.deadline.toISOString() },
        projectId: project!._id,
      });
      toast.success(result?.data?.message || "پروژه با موفقیت ویرایش شد !");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "خطایی رخ داد !");
    }
  };

  return (
    <div className="bg-secondary-0 p-6 flex flex-col gap-y-8 rounded-xl max-w-xl">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary-900">
          {editMode ? "ویرایش پروژه" : "ایجاد پروژه جدید"}
        </h1>
        <button
          className="p-1"
          onClick={() => navigate({ to: "/owner/projects" })}
        >
          <FaArrowLeft className="size-5 " />
        </button>
      </div>
      <FormProvider {...hookform}>
        <form
          noValidate
          className="flex flex-col max-w-lg gap-y-6"
          onSubmit={hookform.handleSubmit(
            editMode ? handleEditProject : handleCreateProject,
          )}
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
            loading={isCreating || isEditing}
            loadingContent="در حال ایجاد پروژه"
          >
            {editMode ? "ویرایش پروژه" : "ایجاد پروژه"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
