import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function TodoShow({ params }) {
  // Simulando um delay para demonstrar carregamento lento
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const id = await params.id;

  const todo = await db.todo.findFirst({
    where: { id: Number(id) },
  });

  if (!todo) {
    /**
     * notFound() redireciona o usuário para a pagina de notFound mais proxima
     */
    return notFound();
  }

  return <div>Todo show {todo.titulo} </div>;
}
