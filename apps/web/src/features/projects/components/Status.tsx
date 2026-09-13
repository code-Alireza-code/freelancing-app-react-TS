import Modal from "@/components/Modal";
import type { Projects } from "@/schemas/project";
import Select from "@/ui/Select";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  ProjectStatusSchema,
  type ProjectStatusType,
} from "../schema/projectStatus";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectStatus } from "../../../constants/projectStatus";
import Button from "@/ui/Button";
import { useChangeProjectStatus } from "../queries/projectQueries";
import { toast } from "sonner";

type Props = { project: Projects[number] };

const statusOptions = [
  {
    value: ProjectStatus.open,
    label: "باز",
  },
  {
    value: ProjectStatus.closed,
    label: "بسته",
  },
];

export function Status({ project }: Props) {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const handleClose = () => setIsOpenStatus(false);

  const hookform = useForm<ProjectStatusType>({
    resolver: zodResolver(ProjectStatusSchema),
    defaultValues: {
      status: project.status,
    },
  });

  const { changeProjectStatus, isChanging } = useChangeProjectStatus();

  const handleChangeStatus = async (data: ProjectStatusType) => {
    if (data.status === project.status) return handleClose();
    try {
      const result = await changeProjectStatus({
        data,
        projectId: project._id,
      });
      toast.success(result?.message);
      handleClose();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpenStatus(true)} className="">
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </button>
      <Modal
        open={isOpenStatus}
        onClose={handleClose}
        title={`تغییر وضعیت ${project.title}`}
        showCloseButton={false}
      >
        <FormProvider {...hookform}>
          <form
            action=""
            className="space-y-4"
            onSubmit={hookform.handleSubmit(handleChangeStatus)}
          >
            <Select
              name="status"
              options={statusOptions}
              className="bg-secondary-200"
              disabled={isChanging}
            />
            <div className="flex gap-x-2">
              <Button variant="primary" type="submit">
                تغییر
              </Button>
              <Button variant="outline" type="button" onClick={handleClose}>
                لغو
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
