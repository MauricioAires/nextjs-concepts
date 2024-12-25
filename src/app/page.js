import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold text-gray-300">Home</h1>

      <Link
        href="/sobre"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Ir para sobre
      </Link>

      <div className="border-separate"></div>

      <h2 className="text-2xl font-bold text-gray-300">Acessar posts</h2>

      <Link
        href="/posts"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Posts
      </Link>

      <Link
        href="/example?busca=mariana"
        className="text-blue-500 hover:text-blue-700 underline text-lg"
      >
        Página com parâmetros
      </Link>
    </main>
  );
}
