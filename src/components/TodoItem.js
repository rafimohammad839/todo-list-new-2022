import React, { useEffect, useRef } from "react";

const TodoItem = ({ todos, item, idx, deleteItem, setTodos }) => {
  const inputEl = useRef(null);
  const buttonEl = useRef(null);

  useEffect(() => {
    inputEl.current.value = item.title;
  }, [])

  const editItem = (todoId) => {
    if (buttonEl.current.innerHTML === 'Edit') {
      inputEl.current.removeAttribute('readOnly')
      inputEl.current.focus();
      buttonEl.current.innerHTML = 'Save';
    } else {
      let temp = todos.find(todo => todo.id === todoId);
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === temp.id) {
          todos[i].title = inputEl.current.value;
        }
      }
      setTodos([...todos]);
      inputEl.current.readOnly = true;
      buttonEl.current.innerHTML = 'Edit';
    }
  }

  return (
    <div key={idx} className="task">
      <div className="content">
        <input type="text" className="text" readOnly ref={inputEl} />
      </div>
      <div className="actions">
        <button className="edit" onClick={() => editItem(idx)} ref={buttonEl}>Edit</button>
        <button className="delete" onClick={() => deleteItem(idx)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
