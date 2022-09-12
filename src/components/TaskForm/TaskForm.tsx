import { FormEvent } from 'react';

import classes from './TaskForm.module.scss'

interface TaskFormProps {
  text: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  disable: boolean;
}

export function TaskForm({ onChange, onSubmit, text, disable }: TaskFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form className={classes['form']} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done"
        value={text}
        onChange={e => onChange(e.target.value)}
        className={disable ? classes['disabled'] : undefined}
      />

      <button type="submit" disabled={disable} />
    </form>
  );
}
