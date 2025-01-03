import tasks from "../../../utils/dataTasks";
import Task from "../../origin/Task/Task";

const Board = () => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</>
	);
};

export default Board;
