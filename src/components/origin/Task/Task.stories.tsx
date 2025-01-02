import { StoryObj } from "@storybook/react";
import Task from "./Task";

const meta = {
	component: Task,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		priority: {
			control: "inline-radio",
			options: ["minor", "normal", "high", "blocker"]
		}
	}
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
	args: {
		title: "Lorem ipsum dolor sit amet",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		priority: "normal",
		dueDate: new Date(),
		assignee: {
			id: "1",
			name: "Name",
			email: "Email",
			avatar: "https://api.zapovednik96.ru/upload/iblock/f0e/shutterstock_2478142185.jpg"
		}
	}
};
