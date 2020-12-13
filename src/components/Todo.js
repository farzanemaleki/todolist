import React from "react";

const Todo = ({text, toDos, setToDos, key}) =>{
    const deleteHaneler = () =>{

    };
    return(
        <div className="todo input-group flex justify-content-center">
            <li className="todo-item form-control col-sm-9 input-group-append">{text}</li>
            <i className="btn btn-outline-warning complete-btn fa fa-check-circle text-dark input-group-text" />
            <i onClick={deleteHaneler} className="btn btn-outline-danger trash-btn fas fa-trash-alt text-dark input-group-text" />
        </div>

    );
};
export default Todo;