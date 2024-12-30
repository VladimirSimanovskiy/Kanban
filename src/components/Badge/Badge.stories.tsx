import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
	component: Badge,
	parameters: {
		layout: "centered"
	}
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "Badge",
		status: "info"
	}
};
