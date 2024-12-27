import { redirect } from "next/navigation";

export default function ProfilePage() {
  const user = true;

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Nome do Perfil</h1>
      <p>Informações sobre o usuário...</p>
    </div>
  );
}
