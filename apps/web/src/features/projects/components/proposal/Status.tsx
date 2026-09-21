import Modal from "@/components/Modal";
import { ProposalStatus } from "@/constants/proposalStatus";
import type { ProjectProposal } from "@/schemas/project";
import Button from "@/ui/Button";
import Select from "@/ui/Select";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  ProposalStatusSchema,
  type ProposalStatusType,
} from "../../schema/proposalStatus";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangeProposalStatus } from "../../queries/proposalQueries";
import { useParams } from "@tanstack/react-router";
import { toast } from "sonner";

type Props = { proposal: ProjectProposal };

const statusOptions = [
  {
    label: "رد شده",
    value: ProposalStatus.rejected.toString(),
  },
  {
    label: "در انتظار",
    value: ProposalStatus.awaiting.toString(),
  },
  {
    label: "قبول شده",
    value: ProposalStatus.approved.toString(),
  },
];

export default function Status({ proposal }: Props) {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const handleClose = () => setIsOpenStatus(false);

  const { projectId } = useParams({
    from: "/_dashboardLayout/_ownerLayout/owner/projects/$projectId/proposals",
  });

  const hookform = useForm<ProposalStatusType>({
    resolver: zodResolver(ProposalStatusSchema),
  });

  const { changeProposalStatus, isChanging } =
    useChangeProposalStatus(projectId);

  const handleChangeStatus = async (data: ProposalStatusType) => {
    try {
      const result = await changeProposalStatus({
        data,
        proposalId: proposal._id,
      });
      toast.success(result?.message || "وضعیت با موفقیت تغییر کرد ");
      handleClose();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "مشکلی پیش آمد, مجددا تلاش کنید !‌",
      );
    }
  };

  const currentStatus = () => {
    switch (proposal.status) {
      case 0:
        return <span className="badge badge--danger">رد شده</span>;
      case 1:
        return <span className="badge badge--warning">در انتظار</span>;
      case 2:
        return <span className="badge badge--success">قبول شده</span>;
      default:
        return <span className="badge badge--outline">وضعیت نامعلوم</span>;
    }
  };
  return (
    <div>
      <button onClick={() => setIsOpenStatus(true)}>{currentStatus()}</button>
      <Modal
        open={isOpenStatus}
        onClose={handleClose}
        title={`تغییر وضعیت پروپوزال`}
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
              placeholder="--------"
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
    </div>
  );
}
