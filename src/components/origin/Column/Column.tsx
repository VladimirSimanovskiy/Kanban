import { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Separator } from "../../ui/Separator";

const columnVariants = tv({
	slots: {
		wrapper: "flex flex-col gap-2 rounded-lg bg-primary-bg p-4",
		header: "flex items-center justify-between",
		titleClass: "text-md font-bold text-primary"
	}
});

interface ColumnProps {
	className?: string;
	title: string;
}

const Column: FC<PropsWithChildren<ColumnProps>> = ({ children, title }) => {
	const { wrapper, header, titleClass } = columnVariants();
	return (
		<div className={wrapper()}>
			<div className={header()}>
				<h2 className={titleClass()}>{title}</h2>
			</div>
			<Separator orientation="horizontal" className="bg-primary-fg" />
			{children}
		</div>
	);
};

export default Column;
