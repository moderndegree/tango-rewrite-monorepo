import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  args: {
    children: "Toggle",
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Toggle Me",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Toggle Me",
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    children: "Selected State",
  },
};
