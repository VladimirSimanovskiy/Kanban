import { TaskProps } from "../components/origin/Task/Task";

const tasks: TaskProps[] = [
	{
		id: 1,
		title: "Task 1",
		description: "Description 1",
		priority: "minor",
		dueDate: new Date(),
		assignee: {
			id: 1,
			name: "John Doe",
			email: "john.doe@example.com",
			avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858495.png"
		}
	},
	{
		id: 2,
		title: "Task 2",
		description: "Description 2",
		priority: "normal",
		dueDate: new Date(),
		assignee: {
			id: 2,
			name: "Jane Doe",
			email: "jane.doe@example.com",
			avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858478.png"
		}
	},
	{
		id: 3,
		title: "Task 3",
		description: "Description 3",
		priority: "high",
		assignee: {
			id: 3,
			name: "John Smith",
			email: "john.smith@example.com",
			avatar: "https://cdn-icons-png.flaticon.com/512/6834/6834206.png"
		}
	},
	{
		id: 4,
		title: "Task 4",
		description: "Description 4",
		priority: "blocker",
		assignee: {
			id: 4,
			name: "Bob Wilson",
			email: "bob.wilson@example.com",
			avatar: "https://cdn-icons-png.flaticon.com/512/6834/6834225.png"
		}
	}
];

export default tasks;
