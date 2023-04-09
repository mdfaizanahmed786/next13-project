import React from "react";

type Props = {};

const SingleTodo = async (props: { params: { id: string } }) => {
  const fetchTodo = await fetch(
    `http://localhost:3000/api/todo/${props.params.id}`
  );
  const todo = await fetchTodo.json();
  console.log(todo);
  return (
    <div>
      <h1 className="font-bold md:text-3xl text-lg">{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{new Date(todo.createdAt).getTime()}</p>
    </div>
  );
};

export default SingleTodo;
