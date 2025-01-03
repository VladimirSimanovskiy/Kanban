import { StoryObj } from "@storybook/react";
import Column from "./Column";
import Task from "../Task/Task";
import tasks from "../../../utils/dataTasks";

const meta = {
	component: Column,
	parameters: {
		layout: "centered"
	}
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Default: Story = {
	args: {
		title: "Open",
		children: tasks.map((task) => <Task key={task.id} {...task} />)
	}
};
