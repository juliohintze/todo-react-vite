import { createTask } from "../services/create-task";
import { deleteTask } from "../services/delete-task";
import { getTasks } from "../services/get-tasks"
import { toggleTask } from "../services/toggle-task";
import { taskState } from "./state";

async function wrapWithLoading<R>(fn: () => Promise<R>) {
  taskState.loading = true;
  const returnValue = await fn();
  taskState.loading = false; 

  return returnValue;
}

export const taskController = {
  getTasks() {
    return wrapWithLoading(async () => {
      const tasks = await getTasks();
      
      taskState.taskList = tasks;
      return tasks;
    })
  },

  createTask(text: string) {
    return wrapWithLoading(async () => {
      const newTask = await createTask(text);
      
      await this.getTasks();
      return newTask;
    });
  },

  toggleTask(taskId: string, completed: boolean) {
    return wrapWithLoading(async () => {
      const updatedTask = await toggleTask(taskId, completed);
      
      await this.getTasks();
      return updatedTask;
    });
  },

  deleteTask(taskId: string) {
    return wrapWithLoading(async () => {
      await deleteTask(taskId);
      await this.getTasks();
    });
  }
}
