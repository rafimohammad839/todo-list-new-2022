import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteItem, setTodos }) => {
  return (
    <main>
      <section id="task-list">
        <h2>Tasks</h2>
        <div id="tasks">
          {
            todos && todos.map((item, idx) => {
              return (
                <TodoItem 
                  key={idx} 
                  item={item} 
                  idx={item.id} 
                  deleteItem={deleteItem}
                  setTodos={setTodos}
                  todos={todos}
                />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default TodoList