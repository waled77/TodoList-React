import React,{useState} from 'react';
import './App.css';
import TodostList from "./components/TodosList/TodosList";
import TodosForm from "./components/TodosForm/TodosForm";

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([
    {id:1,text:"i will need some food."},
    {id:2,text:"i will go to the Mosque"},
    {id:3,text:"today i will play"},
    {id:4,text:"i will eat fish in morning"}
  ]);

  return (
    <div className="app">
      <TodosForm input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      <TodostList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
