import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, Column, Row, Cell } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Collections/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table aria-label="Example table">
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column>Size</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>document.pdf</Cell>
          <Cell>PDF</Cell>
          <Cell>2.5MB</Cell>
        </Row>
        <Row>
          <Cell>image.png</Cell>
          <Cell>Image</Cell>
          <Cell>4.2MB</Cell>
        </Row>
      </TableBody>
    </Table>
  ),
};
