import type { Meta, StoryObj } from "@storybook/react";
import { FileTrigger } from "./FileTrigger";

const meta: Meta<typeof FileTrigger> = {
  title: "Buttons/FileTrigger",
  component: FileTrigger,
  tags: ["autodocs"],
  args: {
    children: "Choose File",
  },
};

export default meta;
type Story = StoryObj<typeof FileTrigger>;

export const Default: Story = {
  args: {
    children: "Upload File",
  },
};

export const WithFileTypes: Story = {
  args: {
    children: "Upload Image",
    acceptedFileTypes: [".jpg", ".png", ".gif"],
  },
};

export const CustomStyle: Story = {
  args: {
    children: "Upload Document",
    variant: "outline",
    size: "lg",
  },
};
