import { delay } from "../helpers/delay";
import { taskStorage } from "../helpers/task-storage";

export async function toggleTask(taskId: string, completed: boolean) {
  await delay(200);

  const tasks = taskStorage.get();
  const task = tasks.find(task => task.id === taskId);

  if (!task) throw Error(`Task with id ${taskId} not found`);
  task.completed = completed;
  taskStorage.set(tasks);

  return task;
}

