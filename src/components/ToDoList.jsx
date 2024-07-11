/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const ToDoList = (props) => {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default ToDoList;
