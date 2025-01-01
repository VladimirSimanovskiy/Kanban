import { StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
	component: Avatar,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		size: {
			control: "inline-radio",
			options: ["sm", "md", "lg"]
		}
	}
};

export default meta
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	args: {
		src: "https://api.zapovednik96.ru/upload/iblock/f0e/shutterstock_2478142185.jpg",
		size: "md"
	}
};