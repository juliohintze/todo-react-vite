import { useCallback, useMemo, useState } from "react";

import { TTask } from "../../types/task";
import { TabOptionKey } from "../TaskTabs/TaskTabs";
import { useSnapshot } from '../../helpers/valtio';
import { taskState } from "../../storage/state";
import { taskController } from "../../storage/task-controller";

export function useTaskPage() {
  const snap = useSnapshot(taskState);
  const allTasks = snap.taskList;
  const loading = snap.loading;
  const [inputText, setInputText] = useState('');
  const onFormSubmit = useCallback((value: string) => {
    if (!value) return;

    taskController.createTask(value);
    setInputText('');
  }, []);
  const onRemove = useCallback((task: TTask) => {
    taskController.deleteTask(task.id);
  }, []);
  const onToggle = useCallback((task: TTask, completed: boolean) => {
    taskController.toggleTask(task.id, completed);
  }, []);
  const [activeTab, setActiveTab] = useState<TabOptionKey>('all');
  const visibleTasks = useMemo(() => {
    switch (activeTab) {
      case 'active': return allTasks.filter(task => !task.completed);
      case 'completed': return allTasks.filter(task => task.completed);
      default: return allTasks;
    }
  }, [allTasks, activeTab]);

  return {
    loading,
    inputText,
    setInputText,
    onFormSubmit,
    visibleTasks,
    onRemove,
    onToggle,
    activeTab,
    setActiveTab,
  }
}
