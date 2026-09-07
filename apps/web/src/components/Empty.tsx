type Props = { resourceName: string };

export function Empty({ resourceName }: Props) {
  return (
    <p className="font-bold text-secondary-700">
      هیچ {resourceName} ای وجود ندارد !
    </p>
  );
}
