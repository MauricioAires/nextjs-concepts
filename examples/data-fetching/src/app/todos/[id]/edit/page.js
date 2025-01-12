import { findTodoById } from "@/action";
import { TodoForm } from "@/components/TodoForm";

export default async function TodoEdit({ params }) {
  const { id } = await params;

  const todo = await findTodoById(Number(id));

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-center text-lg font-bold  uppercase">
        Editar dados da tarefa
      </h2>
      <TodoForm todo={todo} />
    </div>
  );
}
