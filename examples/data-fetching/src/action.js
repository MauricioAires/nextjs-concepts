"use server";

import { redirect } from "next/navigation";
import { db } from "./db";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({ where: { id } });

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
