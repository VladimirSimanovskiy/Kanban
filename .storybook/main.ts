import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],

	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-themes"
	],

	framework: {
		name: "@storybook/react-vite",
		options: {}
	},

	docs: {},

	typescript: {
		reactDocgen: "react-docgen-typescript"
	}
};
export default config;
