import { db } from "@/db";
import { redirect } from "next/navigation";

export default function TodoPage() {
  // formData => useState
  const addTodo = async (formData) => {
    "use server";

    const titulo = formData.get("title");
    const descricao = formData.get("description");
    const status = "pendente";

    // As validações deveria ser feitas aqui

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status,
      },
    });

    redirect("/");
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Criar nova tarefa</h1>

      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Título
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Insira o título"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          />
        </label>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Descreva a tarefa"
            required
            className="mt-1 px-4 h-32 py-2 border border-gray-300 rounded-md w-full"
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:ng-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        "
        >
          Criar tarefa
        </button>
      </form>
    </div>
  );
}
