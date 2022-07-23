import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  
  return (
    <div>
      <h1 className ="work-text">Working...!!</h1>
      <div>
      <div className ="todo-wrap" >
        {todos.map((todo) => {
            return(todo.isDone === false ? <Todo todos={todos} todo={todo} key={todo.id} setTodos={setTodos}  />  :  null)
          })}
      </div>
      </div>
      <h1 className = "done-text">Done..!</h1>
      <div className ="todo-wrap" >
        {todos.map((todo) => {
          return(todo.isDone === true ? <Todo todos={todos} todo={todo} key={todo.id} setTodos={setTodos}/>  :  null)
        })}
      </div>
    </div>
  );
}

export default List;
