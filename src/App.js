import './App.css';
import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
    const [inputText, setInputText] = useState("");
    const [toDos , setToDos] = useState([]);
    return (
        <div className="App">
            <header>
                <h1> Farzane's To Do List </h1>
                <Form
                    setToDos={setToDos}
                    toDos={toDos}
                    inputText={inputText}
                    setInputText={setInputText} />
                <TodoList
                toDos={toDos}
                setToDos={setToDos}
                />
            </header>
        </div>
    );
}

export default App;
