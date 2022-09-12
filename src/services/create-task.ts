import { delay } from "../helpers/delay";
import { taskStorage } from "../helpers/task-storage";
import { TTask } from "../types/task";

let id = 0;

export async function createTask(text: string) {
  await delay(200);

  const tasks = taskStorage.get();
  const newTask: TTask = {
    id: String(id++),
    completed: false,
    text,
  };

  tasks.push(newTask);
  taskStorage.set(tasks);
  return newTask;
}
