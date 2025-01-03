import * as React from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const separatorVariants = tv({
	variants: {
		orientation: {
			horizontal: "h-px w-full bg-secondary-border",
			vertical: "h-full w-px bg-secondary-border"
		}
	}
});

export type SeparatorProps = Required<VariantProps<typeof separatorVariants>> & {
	className?: string;
};

export const Separator: React.FC<SeparatorProps> = ({ orientation, className }) => {
	return <div className={twMerge(separatorVariants({ orientation }), className)} />;
};
