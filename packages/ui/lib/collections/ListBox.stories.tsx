import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListBox, ListBoxItem } from "./ListBox";

const meta: Meta<typeof ListBox> = {
  title: "Collections/ListBox",
  component: ListBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  render: () => (
    <ListBox aria-label="Animals">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Bird</ListBoxItem>
    </ListBox>
  ),
};

export const WithSelection: Story = {
  render: () => (
    <ListBox aria-label="Animals" selectionMode="single">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Bird</ListBoxItem>
    </ListBox>
  ),
};
