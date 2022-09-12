import { TTask } from '../../types/task';
import { Task } from '../Task';
import classes from './TaskList.module.scss';

interface TaskListProps {
  tasks: TTask[];
  onToggle: (task: TTask, value: boolean) => void;
  onRemove: (task: TTask) => void;
  disable: boolean;
  noTasksMessage: string;
}

export function TaskList({
  tasks,
  noTasksMessage,
  disable,
  onToggle,
  onRemove
}: TaskListProps) {
  if (!tasks.length) return (
    <p className={classes['empty-list']}>
      {noTasksMessage}
    </p>
  );

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          disable={disable}
          text={task.text}
          checked={task.completed}
          onChange={(e) => onToggle(task, e.target.checked)}
          onRemove={() => onRemove(task)}
        />
      ))}
    </ul>
  )
}
