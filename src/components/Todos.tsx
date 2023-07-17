import { trpc } from "~/utils/trpc";
import CheckBox from "./CheckBox";

export default function Todos() {
  const { data, isLoading } = trpc.todos.useQuery();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="mx-auto mt-10 max-w-screen-md ">
      {data?.map((todo) => (
        <div
          key={todo.id}
          className="my-2 flex justify-between rounded-lg border p-3 shadow"
        >
          <p className="font-[500] text-gray-700">{todo.title}</p>
          <p>
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs text-white ${
                todo.isCompleted ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {todo.isCompleted ? "Completed" : "Not completed"}
            </span>
          </p>
          <CheckBox todo={todo} />
        </div>
      ))}
    </div>
  );
}
