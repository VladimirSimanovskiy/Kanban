import { FC } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const avatarVariants = tv({
	base: "flex justify-center items-center rounded-full object-cover border-[1px] border-solid border-primary",
	variants: {
		size: {
			sm: "h-8 w-8",
			md: "h-9 w-9",
			lg: "h-10 w-10"
		}
	},
	defaultVariants: {
		size: "md"
	}
});

type AvatarUrl = string

type AvatarProps = VariantProps<typeof avatarVariants> & {
	src: AvatarUrl
	className?: string;
};

const Avatar: FC<AvatarProps> = ({
	className,
	src,
	size
}) => {
	return 	<img className={twMerge(avatarVariants({size}), className)} src={src}/>
};

export default Avatar;
