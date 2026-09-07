import Modal from "@/components/Modal";
import type { Project } from "@/schemas/project";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useRemoveOwnerProject } from "../queries/projectQueries";

type Props = { project: Project };

export function RemoveButton({ project }: Props) {
  const [isRemoveModalOpen, setIsremoveModalOpen] = useState(false);
  const handleCloseModal = () => setIsremoveModalOpen(false);

  const { removeProject, isRemoving } = useRemoveOwnerProject();

  const handleDelete = async () => {
    await removeProject(project._id);
    handleCloseModal();
  };

  return (
    <>
      <Modal
        open={isRemoveModalOpen}
        onClose={handleCloseModal}
        title={`آیا از حذف ${project.title} مطمئن هستید ؟`}
      >
        <div className="flex gap-x-2 h-10">
          <Button variant="danger" onClick={handleDelete} loading={isRemoving}>
            بله
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            خیر
          </Button>
        </div>
      </Modal>
      <ButtonIcon onClick={() => setIsremoveModalOpen((prev) => !prev)}>
        <IoMdTrash className="text-error" />
      </ButtonIcon>
    </>
  );
}
