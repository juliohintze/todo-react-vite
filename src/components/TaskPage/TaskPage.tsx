import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import { TaskTabs } from '../TaskTabs';
import { TabOptionKey } from '../TaskTabs/TaskTabs';
import classes from './TaskPage.module.scss'
import { useTaskPage } from './useTaskPage';

const noTasksMessage: Record<TabOptionKey, string> = {
  'all': 'No tasks here',
  'active': 'No active tasks',
  'completed': 'No completed tasks',
}

export function TaskPage() {
  const {
    visibleTasks,
    loading,

    onFormSubmit,
    onRemove,
    onToggle,
    
    setActiveTab,
    activeTab,

    inputText,
    setInputText,
  } = useTaskPage();

  return (
    <div className={classes['task-page']}>
      <TaskForm
        text={inputText}
        onChange={setInputText}
        onSubmit={onFormSubmit}
        disable={loading}
      />

      <div className={classes['space']} />

      <TaskTabs
        value={activeTab}
        onChange={setActiveTab}
        disable={loading}
      />

      <div className={classes['space']} />

      <TaskList
        tasks={visibleTasks}
        onRemove={onRemove}
        onToggle={onToggle}
        disable={loading}
        noTasksMessage={noTasksMessage[activeTab]}
      />

    </div>
  );
}
