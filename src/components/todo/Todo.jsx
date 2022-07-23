import React from "react";
import "./style.css";

function Todo({ todos, todo ,setTodos }) {
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    // 버튼을 누른 id값이랑 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    console.log(todos)
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        //id 값을 비교해서 id 가 다르다면 그대로 두고, 같다면 isDone 값을 반전시키도록
      )
    );
  };

  
  return (
   <div className="todo-list">
     <h3>{todo.title}</h3>
     <div className="todo-cont">{todo.cont}</div>
     <button onClick={ () => onRemove(todo.id) } >삭제하기</button>
     {/* todo.id 값을 앞으로 props 로 받아올 onRemove 함수의 파라미터로 넣어서 호출 */}
     <button onClick={() => onToggle(todo.id)}>{todo.isDone === true ? '취소하기' : '해냈다!' }</button>
   </div> 
  )
}

export default Todo;
