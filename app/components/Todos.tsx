import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  todos: any;
};

const Todos = (props: Props) => {
  const { todos } = props;
const router=useRouter();
  return (
    <div className="space-y-5 py-5">
      {todos?.map((todo: any) => (
        <div
          key={todo.id}
          className="ring-1 font-bold ring-blue-500 p-2 rounded-md flex items-center"
          onClick={()=>router.push(`/todo/${todo.id}`)}
        >
          <p className="flex-1">{todo.title}</p>
          <div className="flex gap-5">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Edit</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
