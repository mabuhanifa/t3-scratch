import { useState } from "react";
import { trpc } from "~/utils/trpc";

export default function CreateTodo() {
  const [title, setTitle] = useState("");

  const addTodo = trpc.todo.addTodo.useMutation();
  const { refetch } = trpc.todo.todos.useQuery();

  const handleSubmit = () => {
    addTodo.mutate(
      { title },
      {
        onSuccess: () => {
          void refetch();
          setTitle("");
        },
      }
    );
  };

  return (
    <div className="my-5 flex justify-between space-x-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Todo Title"
        className="flex-grow rounded-md border bg-gray-200 px-2 py-1"
      />
      <button
        className="rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 active:bg-blue-500"
        onClick={handleSubmit}
      >
        Add todo
      </button>
    </div>
  );
}
