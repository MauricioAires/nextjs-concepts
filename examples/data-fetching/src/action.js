"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { revalidatePath } from "next/cache";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({ where: { id } });

  // Perfect -> revalida a pagina! de forma manually,não é por tempo e nem é
  // removido 100%
  revalidatePath("/");

  // Funciona com um return então nada funciona depois dele
  redirect("/");
}

// formData => useState
export async function addTodo(formData) {
  const titulo = formData.get("title");
  const descricao = formData.get("description");
  const status = "pendente";

  // As validações deveria ser feitas aqui
  await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  redirect("/");
}

export async function findTodoById(id) {
  const todo = await db.todo.findFirst({
    where: {
      id,
    },
  });

  return todo;
}

export async function updateTodo(formState, formData) {
  const id = formData.get("id");
  const titulo = formData.get("title");
  const descricao = formData.get("description");
  try {
    if (titulo.length < 5) {
      return {
        errors: "O título precisa de pelo menos 5 caracteres.",
      };
    }

    if (descricao.length < 10) {
      return {
        errors: "A descrição precisa de pelo menos 10 caracteres.",
      };
    }

    // throw new Error("Falha ao salvar dados, sistema offline.");

    await db.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        titulo,
        descricao,
      },
    });

    redirect("/");
  } catch (error) {
    return {
      errors: error.message,
    };
  }
}
