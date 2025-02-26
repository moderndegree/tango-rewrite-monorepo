import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";
import { ToggleButtonGroup } from "./ToggleButtonGroup";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "Buttons/ToggleButtonGroup",
  component: ToggleButtonGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Horizontal: Story = {
  render: () => (
    <ToggleButtonGroup orientation="horizontal">
      <ToggleButton id="bold">Bold</ToggleButton>
      <ToggleButton id="italic">Italic</ToggleButton>
      <ToggleButton id="underline">Underline</ToggleButton>
    </ToggleButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ToggleButtonGroup orientation="vertical">
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
};
