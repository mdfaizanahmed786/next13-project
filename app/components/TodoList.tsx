"use client"
import React, { useEffect, useState } from "react";
import Todos from "./Todos";

type Props = {};

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<[]>();
  const [key, setKey] = useState(0);
  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("/api/todos");
      const response = await data.json();
      
      setTodos(response);
      
    };
    getTodos();
  }, [todos?.length]);

  useEffect(()=>{}, [todos])

  return (
    <div>
     
      <Todos  todos={todos} />

      
    </div>
  );
};

export default TodoList;
