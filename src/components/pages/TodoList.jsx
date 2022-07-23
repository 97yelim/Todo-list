import React, { useState } from 'react';
import Layout from "../layout/Layout"
import Header from "../header/Header"
import Form from "../form/Form"
import List from "../list/List"

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "리액트 공부하기",
          cont: "리액트 기초를 공부해봅시다.",
        },
        {
          id: 2,
          title: "리액트 공부하기",
          cont: "리액트 기초를 공부해봅시다.",
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