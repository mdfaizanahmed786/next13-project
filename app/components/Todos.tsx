import { useRouter } from "next/navigation";
import React from "react";
import Todo from "./Todo";

type Props = {
  todos: any;
};

const Todos = (props: Props) => {
  const { todos } = props;
const router=useRouter();
  return (
    <div className="space-y-5 py-5 ">
      {todos?.map((todo: any) => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </div>
  );
};

export default Todos;
