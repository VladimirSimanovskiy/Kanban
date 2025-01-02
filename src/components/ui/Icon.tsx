import { FC } from "react"
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants"
import { LucideIcon } from "lucide-react"

const iconVariants = tv({
	base: "h-4 w-4"
})

type IconProps = VariantProps<typeof iconVariants> & {
	icon: LucideIcon
	className?: string;
}

const Icon: FC<IconProps> = ({
	icon: Icon,
	className
}) => {
	return <Icon className={twMerge(iconVariants(), className)}/>
}

export default Icon;