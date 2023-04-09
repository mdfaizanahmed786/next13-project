"use client";
import React, { useState } from "react";
import { setSyntheticTrailingComments } from "typescript";

type Props = {};

const TodoSubmitForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          className="border-2 border-gray-300  w-80 md:w-auto md:w-auto flex-1 p-2 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          className="border-2 resize-none border-gray-300 flex-1 p-2 rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setDescription(e.target.value)}
          rows={7}
        />

        <button className="bg-blue-500 text-white p-2 rounded-md w-20">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoSubmitForm;
