import React from "react";

import Todo from "./Todo"

const TodoList = ({toDos, setToDos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDos.map(todo => (
                    <Todo toDos={toDos}
                          setToDos={setToDos}
                          key={todo.id}
                          text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};
export default TodoList;