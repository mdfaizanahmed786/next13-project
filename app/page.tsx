
import TodoSubmitForm from "./components/TodoSubmitForm";
import TodoList from "./components/TodoList";
import { Suspense } from "react";



export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold md:text-3xl py-4 text-lg text-center md:text-left">Welcome to TodoMonkey!</h1>
      <TodoSubmitForm />
    
      <Suspense fallback={<p>Loading todos....</p>}>
      <TodoList/>
      </Suspense>
    </main>
  );
}
