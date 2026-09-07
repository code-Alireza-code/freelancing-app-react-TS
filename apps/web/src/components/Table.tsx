import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
type TableRowProps = React.ComponentProps<"tr">;

export function Table({ children }: Props) {
  return (
    <div className="bg-secondary-0 rounded-xl overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }: Props) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }: Props) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children, ...props }: TableRowProps) {
  return <tr {...props}>{children}</tr>;
}

function TableHead({ children }: Props) {
  return <th>{children}</th>;
}

function TableCell({ children }: Props) {
  return <td>{children}</td>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;
