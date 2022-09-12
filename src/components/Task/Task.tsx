import { ChangeEvent } from 'react';
import classnames from 'classnames';

import classes from './Task.module.scss'

interface TaskProps {
  checked: boolean;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => any;
  onRemove: () => void;
  text: string;
  disable: boolean;
}

export function Task({
  checked,
  disable,
  onChange,
  onRemove,
  text
}: TaskProps) {
  return (
    <li className={classes['task']}>
      <label className={classnames(disable && classes['disabled'])}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disable}
        />
        <span>
          {text}
        </span>
      </label>
      <button onClick={onRemove}>X</button>
    </li>
  );
}
