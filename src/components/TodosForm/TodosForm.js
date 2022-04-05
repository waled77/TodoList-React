import React from 'react';
import "./TodosForm.css";

const TodosForm = ({input,setInput,todos,setTodos}) => {

    const handelChange = (e) => {
        setInput(e.target.value)
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if(input) {
            setTodos([...todos,{id:todos.length += 1,text:input,checked:false}]);
            setInput("");
        } else {
            return false
        }
    }
    return (
        <div className="todos-form">
            <form onSubmit={handelSubmit}>
                <input placeholder="Task title" value={input} onChange={handelChange} />
                <button className="add-btn">Add Task</button>
            </form>
        </div>
    )
}

export default TodosForm;
