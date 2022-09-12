import { delay } from "../helpers/delay";
import { taskStorage } from "../helpers/task-storage";

export async function deleteTask(taskId: string) {
  await delay(200);

  const tasks = taskStorage.get();
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) throw Error(`Task with id ${taskId} not found`);
  tasks.splice(taskIndex, 1);
  taskStorage.set(tasks);
}
