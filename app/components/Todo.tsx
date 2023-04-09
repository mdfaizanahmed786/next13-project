import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const Todo = ({ id, title }: any) => {
  const [update, setUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleDeleteTodo = async () => {
    const deleteTodo = await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
    const data = await deleteTodo.json();
    if (data.success) {
      toast.success("Todo deleted successfully");
    }
  };
  const handleEditTodo = async () => {
    const editTodo = await fetch(`/api/todo/${id}`, {
      method: "PUT",
      body: JSON.stringify({ newTitle }),
    });
    const data = await editTodo.json();
    if (data.success) {
      toast.success("Todo edited successfully");
    }
  };
  const router = useRouter();
  return (
    <div className="ring-1 font-bold ring-blue-500 p-2 rounded-md flex items-center w-80 md:w-auto">
     
        {update ? (
          <div className="flex gap-1 md:flex-1">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border-2 border-gray-300  px-2  flex-1  rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              className="bg-blue-500 text-white px-3 py-2 mx-3  rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={!newTitle}
              onClick={() => {
                handleEditTodo();
                setNewTitle("")
                setUpdate(false);
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <p
        className="flex-1 cursor-pointer"
        onClick={(e) => {router.push(`/todo/${id}`)}}
      >{title}</p>
        )}
     
      <div className={`flex gap-5 ${update && "hidden"} md:flex-row`}>
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={() => {
            setUpdate(true);
            setNewTitle(title);
          }}
          disabled={newTitle!==""}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md"
          onClick={() => handleDeleteTodo()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
