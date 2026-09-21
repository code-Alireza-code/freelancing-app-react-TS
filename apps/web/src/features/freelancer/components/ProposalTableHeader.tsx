import { Table } from "@/components/Table";

export default function ProposalTableHeader() {
  return (
    <Table.Header>
      <Table.Head>#</Table.Head>
      <Table.Head>توضیحات پروپوزال</Table.Head>
      <Table.Head>مدت زمان(روز)</Table.Head>
      <Table.Head>قیمت پیشنهادی</Table.Head>
      <Table.Head>وضعیت پروپوزال</Table.Head>
    </Table.Header>
  );
}
