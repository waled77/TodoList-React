import React from 'react';
import "./TodosList.css";

const TodosList = ({todos,setTodos}) => {

    const handelDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const todosList = todos.map((todo) => {
        return (
            <div className="todo-item" key={todo.id}>
                <p className="todo-name">{todo.text}</p>
                <div className="todo-item-bottom">
                    <button className="delete-btn" onClick={() => handelDelete(todo)}>&times;</button>
                </div>
            </div>
        )
    })
    return (
        <div className="todos-list">
            {todosList}
            {todos.length > 0 ?  "": <div className="todo-msg">No Tasks To Show</div>}
        </div>
    )
}

export default TodosList;
