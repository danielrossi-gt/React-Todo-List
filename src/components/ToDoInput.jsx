/* eslint-disable react/prop-types */
const ToDoInput = (props) => {
  const { handleAddToDos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddToDos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default ToDoInput;
