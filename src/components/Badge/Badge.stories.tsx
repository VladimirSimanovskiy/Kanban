import { StoryObj } from "@storybook/react";
import Icon from "../Icon";
import { Circle } from "lucide-react";
import Badge from "./Badge";

export default {
	component: Badge,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		status: {
			control: 'inline-radio',
			options: ['default', 'info', 'success', 'warning', 'error']
			}
	}
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "Badge",
		status: "info"
	}
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Icon icon={Circle}/>
				Badge
			</>
		),
		status: "info"
	}
};
