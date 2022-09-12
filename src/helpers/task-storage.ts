import { TTask } from "../types/task";
import { createLocalStorage } from "./create-local-storage";

export const taskStorage = createLocalStorage('tasks', [] as TTask[]);
