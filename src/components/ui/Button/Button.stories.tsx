import { StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Circle, LoaderCircle } from "lucide-react";
import Icon from "../Icon";

const meta = {
	component: Button,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "outline", "ghost", "link", "text"]
		},
		size: {
			control: "inline-radio",
			options: ["xs", "sm", "md", "lg", "xl"]
		},
		status: {
			control: "inline-radio",
			options: ["default", "info", "success", "warning", "error"]
		},
		state: {
			control: "inline-radio",
			options: ["default", "disabled"]
		}
	}
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button"
	}
};

export const StatusWithIcons: Story = {
	args: {
		status: "success",
		children: (
			<>
				<Icon icon={Circle} />
				Button
				<Icon icon={Circle} />
			</>
		),
		onClick: () => {
			alert("Button clicked");
		}
	}
};

export const IconOnly: Story = {
	args: {
		status: "success",
		iconOnly: true,
		children: (
			<>
				<Icon icon={Circle} />
			</>
		),
		onClick: () => {
			alert("Button clicked");
		}
	}
};

export const Loading: Story = {
	args: {
		state: "disabled",
		children: (
			<>
				<Icon icon={LoaderCircle} className="animate-spin" />
				Button
			</>
		),
		onClick: () => {
			alert("Button clicked");
		}
	}
};
