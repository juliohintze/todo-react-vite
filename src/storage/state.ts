import { proxy } from "valtio";

import { TTask } from "../types/task";

export const taskState = proxy({
  taskList: [] as TTask[],
  loading: false,
});
