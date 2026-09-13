import type { Projects } from "@/schemas/project";
import { RemoveButton } from "./RemoveButton";
import ButtonIcon from "@/ui/ButtonIcon";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "@tanstack/react-router";

type Props = { project: Projects[number] };

export default function ActionButtons({ project }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around w-full [&_svg]:size-5 [&_button]:p-0.5">
      <ButtonIcon
        onClick={() =>
          navigate({
            to: "/owner/projects/$projectId/edit",
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
