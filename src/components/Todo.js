import React from 'react';

const Todo = ({text, id, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        console.log(text);
        setTodos(todos.filter((el) => {
            return el.id !== todo.id;
        }))
    }
    const CompleteBtnHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));

    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={CompleteBtnHandler} className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash" />
            </button>
        </div>
    )
}

export default Todo;
