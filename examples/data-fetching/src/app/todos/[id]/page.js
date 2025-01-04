import { db } from "@/db";

export default async function TodoShow({ params }) {
  const id = await params.id;

  const todo = await db.todo.findFirst({
    where: { id: Number(id) },
  });

  return <div>Todo show {todo.titulo} </div>;
}
