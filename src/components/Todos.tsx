import { trpc } from "~/utils/trpc";

export default function Todos() {
  const { data, isLoading } = trpc.todos.useQuery();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.map((todo) => (
        <p key={todo.id} className="my-2 border-2 border-gray-300">
          {todo.title}
        </p>
      ))}
    </div>
  );
}
