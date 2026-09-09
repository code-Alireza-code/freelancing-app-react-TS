import type { Project } from "@/schemas/project";
import { RemoveButton } from "./RemoveButton";
import ButtonIcon from "@/ui/ButtonIcon";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "@tanstack/react-router";

type Props = { project: Project };

export default function ActionButtons({ project }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around w-full [&_svg]:size-5 [&_button]:p-0.5">
      <ButtonIcon
        onClick={() =>
          navigate({
            to: "/owner/projects/edit/$projectId",
            params: { projectId: project._id },
          })
        }
      >
        <MdModeEditOutline />
      </ButtonIcon>
      <RemoveButton project={project} />
    </div>
  );
}
