import { FC, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const badgeVariants = tv({
	base: "inline-flex justify-center items-center gap-2 py-2 px-4 rounded-md text-white",
	variants: {
		status: {
			default: "bg-primary text-primary-bg",
			info: "bg-status-info",
			success: "bg-status-success",
			warning: "bg-status-warning",
			error: "bg-status-error",
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
