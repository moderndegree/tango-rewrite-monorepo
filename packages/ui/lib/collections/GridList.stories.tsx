import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GridList, GridListItem } from "./GridList";

const meta: Meta<typeof GridList> = {
  title: "Collections/GridList",
  component: GridList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridList>;

export const Default: Story = {
  render: () => (
    <GridList aria-label="Example grid list">
      {Array.from({ length: 9 }, (_, i) => (
        <GridListItem key={i}>Item {i + 1}</GridListItem>
      ))}
    </GridList>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <GridList aria-label="Three column grid" className="grid-cols-3">
      {Array.from({ length: 9 }, (_, i) => (
        <GridListItem key={i}>Item {i + 1}</GridListItem>
      ))}
    </GridList>
  ),
};
