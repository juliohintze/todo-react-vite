export function createLocalStorage<N extends string, T>(
  name: N,
  initialValue: T
) {
  if (!name) throw Error('"name" cannot be empty');

  return {
    set(value: T) {
      const str = JSON.stringify(value);

      localStorage.setItem(name, str);
    },
    get() {
      const value = localStorage.getItem(name);

      if (value === null) return initialValue;

      try {
        return JSON.parse(value) as T;
      } catch (err) {
        return initialValue;
      }
    }
  };
}
