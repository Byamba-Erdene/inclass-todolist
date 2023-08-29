export function TodoInput({ handle, onChange }) {
  return (
    <input
      id="todoInput"
      className="input"
      onKeyDown={handle}
      onChange={onChange}
      placeholder="what's next?"
    />
  );
}
