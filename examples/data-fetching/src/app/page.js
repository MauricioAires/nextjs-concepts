import { deleteTodo, toggleTodoStatus } from "@/action";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { db } from "@/db";
import Link from "next/link";

// Definindo o tempo de revalidação da pagina em cache
// export const revalidate = 20; // 20 seconds

// Desativando o cache da página
// export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ">Tarefas!</h1>

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`bg-gray-100 rounded-lg shadow p-4 ${
              todo.status === "completa" ? "bg-green-100 line-through" : ""
            }`}
          >
            <div className=" flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {todo.titulo}
                </h2>
                <p className="text-gray-500">{todo.descricao}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="italic">Completar?</p>

                <form action={toggleTodoStatus}>
                  <input type="hidden" name="id" id="id" value={todo.id} />
                  <Checkbox checked={todo.status === "completa"} />
                </form>
              </div>
            </div>

            <div className="flex space-x-2 mt-3">
              <Link
                href={`/todos/${todo.id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Visualizar
              </Link>
              <Link
                href={`/todos/${todo.id}/edit`}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Editar
              </Link>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <Button>Excluir</Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
