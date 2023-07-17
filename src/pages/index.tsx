import CreateTodo from "~/components/CreateTodo";
import Todos from "~/components/Todos";

export default function Home() {
  return (
    <main className="mx-auto mt-10 max-w-screen-md ">
      <CreateTodo />
      <Todos />
    </main>
  );
}
