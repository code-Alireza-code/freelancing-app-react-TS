import type { Project } from "@/schemas/project";
import { RemoveButton } from "./RemoveButton";
import { EditButton } from "./EditButton";

type Props = { project: Project };

export default function ActionButtons({ project }: Props) {
  return (
    <div className="flex justify-around w-full [&_svg]:size-5 [&_button]:p-0.5">
      <EditButton project={project} />
      <RemoveButton project={project} />
    </div>
  );
}
