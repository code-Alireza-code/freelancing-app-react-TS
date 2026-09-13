import { Table } from "@/components/Table";

export default function ProposalTableHeader() {
  return (
    <Table.Header>
      <Table.Cell>نام فریلنسر</Table.Cell>
      <Table.Cell>توضیحات پروپوزال</Table.Cell>
      <Table.Cell>مدت زمان(روز)</Table.Cell>
      <Table.Cell>قیمت پیشنهادی</Table.Cell>
      <Table.Cell>وضعیت پروپوزال</Table.Cell>
    </Table.Header>
  );
}
