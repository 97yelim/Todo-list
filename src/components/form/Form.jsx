import React, { useState, useRef } from "react";
import "./style.css";

function Form({setTodos, todos}) {
  const nextId = useRef(3);
  // useRef 로 id 관리
  const initialState = {
    // useState 에서 받아온 값 넣어줄 항목들 생성
    id: 0,
    title: "",
    cont: "",
    isDone : false
  } 
  const [todo, setTodo] = useState(initialState); // form input 에서 받은 데이터를 state의 initialState에 담기

  const onChangeHandler = (e) =>{
    // onClick ={onChangeHandler} 누르면 이벤트 발생
    const {name, value} = e.target; // name(요소의 이름)이 title 이라는 input과 cont라는 input 에서 이벤트가 발생한다고 가리킴.
    setTodo({...todo, [name]:value, id: nextId.current})
    //스프레드 속성 todo의 리스트를 가져와서 압축을 풀기...? 오브젝트 안에 오브젝트로 들어가는 걸 막기 위해 요소를 쫙 풀어주는 (유사배열 / 리스트 / 오브젝트 같은 묶여있는 것들을 풀어주는 역할)

  }
  
  const onSubmitHandler = (e) =>{
    //onClick ={onSubmitHandler} 누르면 이벤트 발생
    setTodos([...todos,todo]);// setTodo의 initialState에 담기
    setTodo(initialState) //인풋 초기화하기
    nextId.current += 1 // 추가 버튼을 누르면 id 현재의 값에서 +1 해라
    console.log(todo)
    console.log(nextId)
  }
  return (
    <div className="form">
      <from className="form-input">
        <label>제목</label>
        <input 
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          value={todo.title}
          onChange={onChangeHandler}
          
        />
        <label>내용</label>
        <input
          type="text"
          size = "50"
          name = "cont"
          placeholder="내용을 입력하세요."
          value={todo.cont}
          onChange={onChangeHandler}
        />
      </from>
      <div className="form-btn">
        <button onClick={onSubmitHandler}>추가하기</button>
      </div>
    </div>
  );
}

export default Form;
