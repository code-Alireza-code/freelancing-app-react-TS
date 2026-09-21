import { Table } from "@/components/Table";

export default function ProjectTableHeader() {
  return (
    <Table.Header>
      <Table.Head>#</Table.Head>
      <Table.Head>عنوان پروژه</Table.Head>
      <Table.Head>بودجه</Table.Head>
      <Table.Head>ددلاین</Table.Head>
      <Table.Head>وضعیت</Table.Head>
      <Table.Head>عملیات</Table.Head>
    </Table.Header>
  );
}
