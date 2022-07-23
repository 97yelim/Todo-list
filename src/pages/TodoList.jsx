import React, { useState } from 'react';
import Layout from "../components/layout/Layout"
import Header from "../components/header/Header"
import Form from "../components/form/Form"
import List from "../components/list/List"

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "리액트 공부하기",
          cont: "리액트 기초를 공부해봅시다.",
          isDone: false
        },
        {
          id: 2,
          title: "투두 리스트 기능 붙이기",
          cont: "리스트 출력이랑 삭제, 스위치 버튼 만들기!",
          isDone: true
        },
      ]);
    return (
        <div>
            <Layout>
              <Header/>
              <Form setTodos={setTodos} todos={todos} ></Form>
              <List todos={todos} setTodos={setTodos}></List>
            </Layout>
        </div>
    );
};

export default TodoList;