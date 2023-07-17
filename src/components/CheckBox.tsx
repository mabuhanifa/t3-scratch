import { trpc } from "~/utils/trpc";

export default function CheckBox({ todo }: { todo: Todo }) {
  const updateTodo = trpc.todo.updateStatus.useMutation();

  const { refetch } = trpc.todo.todos.useQuery();

  const changeStatus = (id: string) => {
    updateTodo.mutate(
      { id, isCompleted: !todo.isCompleted },
      {
        onSuccess: () => {
          void refetch();
        },
      }
    );
  };
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={todo.isCompleted}
        onChange={() => changeStatus(todo.id)}
      />
      <div className="peer h-6 w-11 rounded-full  bg-red-500 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  );
}
