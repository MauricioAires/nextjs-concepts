"use client";

import { updateTodo } from "@/action";
import { useFormState } from "react-dom";

export function TodoForm({ todo }) {
  const [formState, action] = useFormState(updateTodo, {
    erros: "",
  });

  return (
    <form
      action={action}
      className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
    >
      {formState.errors && (
        <div className="my-4 p-2 text-red-900  bg-red-400 border border-red-600 rounded">
          {formState.errors}
        </div>
      )}
      <input type="hidden" id="id" name="id" defaultValue={todo.id} />

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
          defaultValue={todo.titulo}
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
          defaultValue={todo.descricao}
        />
      </label>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:ng-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
  "
      >
        Salvar alterações
      </button>
    </form>
  );
}
