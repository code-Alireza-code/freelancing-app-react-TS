import { Table } from "@/components/Table";

export default function ProjectTableHeader() {
  return (
    <Table.Header>
      <Table.Cell>#</Table.Cell>
      <Table.Cell>عنوان پروژه</Table.Cell>
      <Table.Cell>توضیحات پروژه</Table.Cell>
      <Table.Cell>دسته بندی</Table.Cell>
      <Table.Cell>بودجه</Table.Cell>
      <Table.Cell>ددلاین</Table.Cell>
      <Table.Cell>تگ ها</Table.Cell>
      <Table.Cell>فریلنسر</Table.Cell>
      <Table.Cell>وضعیت</Table.Cell>
      <Table.Cell>عملیات</Table.Cell>
    </Table.Header>
  );
}
