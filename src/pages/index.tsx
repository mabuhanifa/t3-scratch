import { trpc } from "~/utils/trpc";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const data = trpc.todos.useQuery();
  console.log(data.data);
  return (
    <main>
      <div>sdsdsdfs</div>
    </main>
  );
}
