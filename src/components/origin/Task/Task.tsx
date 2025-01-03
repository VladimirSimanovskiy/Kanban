import { FC } from "react";
import { tv } from "tailwind-variants";
import { User } from "../../../services/UserManager/UserManager";
import Badge from "../../ui/Badge/Badge";
import Avatar from "../../ui/Avatar/Avatar";
import { format } from "date-fns";

const taskVariants = tv({
	slots: {
		wrapper: "flex w-64 flex-col gap-1 rounded-md border border-solid border-primary bg-secondary-bg p-3",
		title: "text-base font-bold text-primary",
		description: "text-xs text-primary/60",
		bottomZone: "flex items-center justify-start gap-2",
		date: "text-xs text-primary/60"
	}
});

export type TaskProps = {
	id: number;
	title: string;
	description?: string;
	priority: TaskPriority;
	assignee?: User;
	dueDate?: Date;
};

export type TaskPriority = "minor" | "normal" | "high" | "blocker";

const Task: FC<TaskProps> = ({ title, description, priority, assignee, dueDate }) => {
	const { wrapper, title: titleClass, description: descriptionClass, bottomZone, date } = taskVariants();
	const status = getStatusFromPriority(priority);
	const priorityText = priority.charAt(0).toUpperCase() + priority.slice(1);
	const formattedDueDate = dueDate ? format(dueDate, "dd.MM.yyyy") : "?";
	return (
		<div className={wrapper()}>
			<Badge status={status}>{priorityText}</Badge>
			<div className={titleClass()}>{title}</div>
			<div className={descriptionClass()}>{description}</div>
			<div className={bottomZone()}>
				<Avatar src={assignee?.avatar} size="sm" />
				<div className={date()}>{`Due date: ${formattedDueDate}`}</div>
			</div>
		</div>
	);
};

export default Task;

function getStatusFromPriority(priority: TaskPriority) {
	switch (priority) {
		case "minor":
			return "info";
		case "normal":
			return "success";
		case "high":
			return "warning";
		case "blocker":
			return "error";
	}
}
