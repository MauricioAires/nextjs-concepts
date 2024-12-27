import { ButtonRedirect } from "@/components/ButtonRedirect";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold text-gray-300">Home</h1>

      <Link
        href="/sobre"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Ir para sobre
      </Link>

      <Link
        href="/posts"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Ir para os posts
      </Link>

      <Link
        href="/example?busca=mariana"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Página com parâmetros
      </Link>

      <Link
        href="/products/categories/clothes"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Ir a categoria de roupas
      </Link>

      <Link
        href="/dashboard"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Ir para a dashboard
      </Link>

      <ButtonRedirect />
    </main>
  );
}
