import classnames from 'classnames';

import classes from './TaskTabs.module.scss'

const options = {
  all: 'All',
  active: 'Active',
  completed: 'Completed'
};

export type TabOptions = typeof options;
export type TabOptionKey = keyof TabOptions;

interface TaskTabsProps {
  value: TabOptionKey;
  onChange: (value: TabOptionKey) => void;
  disable: boolean;
}

export function TaskTabs({ disable, value, onChange }: TaskTabsProps) {
  return (
    <div className={classes['task-tabs']}>
      {Object.entries(options).map(([key, text]) => (
        <label
          key={key}
          className={classnames({
            [classes['active']]: value === key,
            [classes['disabled']]: disable,
          })}
        >
          <input
            type="radio"
            name="task-tab"
            value={key}
            disabled={disable}
            checked={value === key}
            onChange={() => onChange(key as TabOptionKey)}
          />
          {text}
        </label>
      ))}
    </div>
  );
}
