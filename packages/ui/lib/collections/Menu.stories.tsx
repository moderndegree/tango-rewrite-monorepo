import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem, MenuTrigger, Popover } from "./Menu";
import { Button } from "../buttons/Button";

const meta: Meta<typeof Menu> = {
  title: "Collections/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <MenuTrigger>
      <Button>Open Menu</Button>
      <Popover>
        <Menu>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
};
