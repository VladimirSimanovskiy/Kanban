import { FC, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const badgeVariants = tv({
	base: "inline-flex",
	variants: {
		status: {
			default: "",
			info: "bg-blue-700"
		}
	}
});

type BadgeProps = VariantProps<typeof badgeVariants> & {
	className?: string;
};

const Badge: FC<PropsWithChildren<BadgeProps>> = ({
	children,
	className,
	status
}) => {
	return (
		<div className={twMerge(badgeVariants({ status }), className)}>
			{children}
		</div>
	);
};

export default Badge;
