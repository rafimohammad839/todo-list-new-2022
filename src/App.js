import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {

  let initial = []
  const [todos, setTodos] = useState(initial)
  const [title, setTitle] = useState("")

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todos'));
    if (storage) {
      setTodos(storage);
    } 
  }, [])

  const deleteItem = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newId = Math.random() * 1000;

    let newTodo = {
      id: newId,
      title: title
    }

    setTodos([...todos, newTodo]);
    setTitle("")
  }

  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos])

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>Task List 2022</h1>
        <form id="new-task-form" onSubmit={handleSubmit}>
          <input type="text" id="new-task-input" placeholder="What do you have planned?" name="title" value={title} onChange={handleChange} />
          <input type="submit" id="new-task-submit" value="Add task" />
        </form>
      </header>
      <TodoList todos={todos} setTodos={setTodos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
