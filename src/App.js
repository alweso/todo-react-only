import './App.css';
import React, {useState, useEffect} from 'react';
import Form from "./components/Form"
import TodoList from "./components/TodoList";

function App() {



    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos()
    }, [])
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            case 'all':
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
           let todoLocal = JSON.parse(localStorage.getItem('todos'));
           console.log(todoLocal);
           setTodos(todoLocal);
        }
    }
  return (
    <div className="App">
        <header>
            <h1>Ola's todo list</h1>
        </header>
        <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} setStatus={setStatus}/>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
