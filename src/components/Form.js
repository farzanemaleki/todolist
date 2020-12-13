import React from "react";

const Form = ({setInputText , setToDos , toDos ,inputText}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) =>{
        e.preventDefault();
        setToDos([
            ...toDos,
            {text: inputText ,complete: false , id: Math.random()*1000 },
        ]);
        setInputText("");
    }
    return (
        <form action="">
            <div className="input-group my-5 row flex justify-content-center">
                <div className="col-sm-8  pr-0">
                <input value={inputText} onChange={inputTextHandler} type="text" className="form-control " placeholder="Enter Your Works" />
                </div>
                    <div className="input-group-append">
                       <i onClick={submitToDoHandler} className="btn btn-outline-primary input-group-text fas fa-plus-square  " />
                    </div>

            <div className="select ">
                <select name="todps" className="filter-todo form-control ">
                    <option className="border border-radius" value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            </div>
        </form>
    );
}

export default Form;


