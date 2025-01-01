/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/global.css"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"]
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					fg: "hsl(var(--primary-fg))",
					bg: "hsl(var(--primary-bg))",
					border: "hsl(var(--primary-border))",
					"bg-hover": "hsl(var(--primary-bg-hover))",
					hover: "hsl(var(--primary-hover))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					fg: "hsl(var(--secondary-fg))",
					bg: "hsl(var(--secondary-bg))",
					border: "hsl(var(--secondary-border))",
					"bg-hover": "hsl(var(--secondary-bg-hover))",
					hover: "hsl(var(--secondary-hover))"
				},
				status: {
					info: {
						DEFAULT: "hsl(var(--status-info))",
						bg: "hsl(var(--status-info-bg))",
						"bg-hover": "hsl(var(--status-info-bg-hover))",
						border: "hsl(var(--status-info-border))",
						hover: "hsl(var(--status-info-hover))"
					},
					success: {
						DEFAULT: "hsl(var(--status-success))",
						bg: "hsl(var(--status-success-bg))",
						"bg-hover": "hsl(var(--status-success-bg-hover))",
						border: "hsl(var(--status-success-border))",
						hover: "hsl(var(--status-success-hover))"
					},
					warning: {
						DEFAULT: "hsl(var(--status-warning))",
						bg: "hsl(var(--status-warning-bg))",
						"bg-hover": "hsl(var(--status-warning-bg-hover))",
						border: "hsl(var(--status-warning-border))",
						hover: "hsl(var(--status-warning-hover))"
					},
					error: {
						DEFAULT: "hsl(var(--status-error))",
						bg: "hsl(var(--status-error-bg))",
						"bg-hover": "hsl(var(--status-error-bg-hover))",
						border: "hsl(var(--status-error-border))",
						hover: "hsl(var(--status-error-hover))"
					}
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
		}
	},
	plugins: []
};
