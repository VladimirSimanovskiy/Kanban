import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = tv({
	base: "inline-flex shrink-0 cursor-pointer select-none items-center justify-center rounded-md font-sans font-medium text-primary-fg",
	variants: {
		variant: {
			primary: "bg-primary text-primary-bg hover:bg-primary-hover",
			secondary: "bg-primary-bg hover:bg-primary-bg-hover",
			outline:
				"border border-solid border-secondary-border bg-secondary-bg hover:border-primary-border hover:bg-secondary-bg-hover",
			ghost: "bg-transparent hover:bg-secondary-bg-hover",
			link: "text-muted underline-offset-base bg-transparent underline hover:text-primary-fg",
			text: "text-muted bg-transparent hover:text-primary-fg"
		},
		state: {
			default: "",
			disabled: "pointer-events-none opacity-50"
		},
		status: {
			default: "",
			info: "text-status-info",
			success: "text-status-success",
			warning: "text-status-warning",
			error: "text-status-error"
		},
		size: {
			xs: "h-7 gap-2 px-2 py-1.5 text-xs",
			sm: "h-8 gap-2 px-3 py-2 text-xs",
			md: "h-9 gap-2 px-4 py-2 text-sm",
			lg: "h-10 gap-2 px-6 py-2 text-base",
			xl: "h-11 gap-3 px-8 py-3 text-lg"
		},
		iconOnly: {
			true: {},
			false: {}
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		status: "default",
		state: "default",
		iconOnly: false
	},
	compoundVariants: [
		/*
		 * Statuses
		 */
		// Primary
		{
			variant: "primary",
			status: ["info", "success", "warning", "error"],
			class: "text-white hover:text-white"
		},
		{
			variant: "primary",
			status: "info",
			class: "bg-status-info hover:bg-status-info-hover"
		},
		{
			variant: "primary",
			status: "success",
			class: "bg-status-success hover:bg-status-success-hover"
		},
		{
			variant: "primary",
			status: "warning",
			class: "bg-status-warning hover:bg-status-warning-hover"
		},
		{
			variant: "primary",
			status: "error",
			class: "bg-status-error hover:bg-status-error-hover"
		},
		// Secondary
		{
			variant: "secondary",
			status: "info",
			class: "bg-status-info-bg hover:bg-status-info-bg-hover"
		},
		{
			variant: "secondary",
			status: "success",
			class: "bg-status-success-bg hover:bg-status-success-bg-hover"
		},
		{
			variant: "secondary",
			status: "warning",
			class: "bg-status-warning-bg hover:bg-status-warning-bg-hover"
		},
		{
			variant: "secondary",
			status: "error",
			class: "bg-status-error-bg hover:bg-status-error-bg-hover"
		},
		// Outline
		{
			variant: "outline",
			status: "info",
			class: "border-status-info-border hover:border-status-info-border hover:bg-status-info-bg"
		},
		{
			variant: "outline",
			status: "success",
			class: "border-status-success-border hover:border-status-success-border hover:bg-status-success-bg"
		},
		{
			variant: "outline",
			status: "warning",
			class: "border-status-warning-border hover:border-status-warning-border hover:bg-status-warning-bg"
		},
		{
			variant: "outline",
			status: "error",
			class: "border-status-error-border hover:border-status-error-border hover:bg-status-error-bg"
		},
		// Ghost
		{
			variant: "ghost",
			status: "info",
			class: "text-status-info hover:bg-status-info-bg"
		},
		{
			variant: "ghost",
			status: "success",
			class: "text-status-success hover:bg-status-success-bg"
		},
		{
			variant: "ghost",
			status: "warning",
			class: "text-status-warning hover:bg-status-warning-bg"
		},
		{
			variant: "ghost",
			status: "error",
			class: "text-status-error hover:bg-status-error-bg"
		},
		// Text & Link
		{
			variant: ["text", "link"],
			status: "info",
			class: "text-status-info/70 hover:text-status-info"
		},
		{
			variant: ["text", "link"],
			status: "success",
			class: "text-status-success/70 hover:text-status-success"
		},
		{
			variant: ["text", "link"],
			status: "warning",
			class: "text-status-warning/70 hover:text-status-warning"
		},
		{
			variant: ["text", "link"],
			status: "error",
			class: "text-status-error/70 hover:text-status-error"
		},
		/*
		 * IconOnly
		 */
		{
			iconOnly: true,
			size: "xl",
			class: "p-3.5"
		},
		{
			iconOnly: true,
			size: "lg",
			class: "p-3"
		},
		{
			iconOnly: true,
			size: "md",
			class: "p-2.5"
		},
		{
			iconOnly: true,
			size: "sm",
			class: "p-2"
		},
		{
			iconOnly: true,
			size: "xs",
			class: "p-1.5"
		}
	]
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		className?: string;
		asChild?: boolean;
	};

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, state, size, children, status, className, iconOnly, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={twMerge(buttonVariants({ variant, state, size, status, iconOnly }), className)}
				ref={ref}
				{...props}
			>
				{children}
			</Comp>
		);
	}
);
