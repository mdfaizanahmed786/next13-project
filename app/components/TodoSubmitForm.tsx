"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

type Props = {};

const TodoSubmitForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addTodo = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });
    const data = await addTodo.json();
    if (data.success) {
      setTitle("");
      setDescription("");
      toast.success("Todo added successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-5  md:gap-4 w-full"
      >
        <input
          type="text"
          placeholder="Enter your todo"
          className="border-2 border-gray-300  w-80 md:w-auto  flex-1 p-2 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          className="border-2 resize-none border-gray-300 flex-1 p-2 rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your description"
          rows={7}
        />

        <button
          className="bg-blue-500 text-white p-2 rounded-md w-20 disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={!title || !description}
        >
          Submit
        </button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default TodoSubmitForm;
