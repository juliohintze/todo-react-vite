import { delay } from "../helpers/delay";
import { taskStorage } from "../helpers/task-storage";

export async function getTasks() {
  await delay(200);

  return taskStorage.get();
}
