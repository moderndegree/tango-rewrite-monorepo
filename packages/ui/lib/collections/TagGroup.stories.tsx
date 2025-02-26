import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TagGroup, Tag } from "./TagGroup";

const meta: Meta<typeof TagGroup> = {
  title: "Collections/TagGroup",
  component: TagGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const Default: Story = {
  render: () => (
    <TagGroup aria-label="Tags">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Tailwind</Tag>
    </TagGroup>
  ),
};

export const Removable: Story = {
  render: () => (
    <TagGroup aria-label="Removable tags" onRemove={console.log}>
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Tailwind</Tag>
    </TagGroup>
  ),
};
