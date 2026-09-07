import Modal from "@/components/Modal";
import type { Project } from "@/schemas/project";
import ButtonIcon from "@/ui/ButtonIcon";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

type Props = { project: Project };

export function EditButton({ project }: Props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <>
      <Modal
        open={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        title="ویرایش"
      >
        test
      </Modal>
      <ButtonIcon onClick={() => setIsEditModalOpen((prev) => !prev)}>
        <MdModeEditOutline />
      </ButtonIcon>
    </>
  );
}
