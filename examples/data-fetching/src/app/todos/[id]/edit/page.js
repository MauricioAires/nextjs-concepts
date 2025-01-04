import { findTodoById } from "@/action";

export default async function TodoEdit({ params }) {
  const id = Number(params.id);

  const todo = await findTodoById(id);

  return <div>Editando: {todo.titulo}</div>;
}
