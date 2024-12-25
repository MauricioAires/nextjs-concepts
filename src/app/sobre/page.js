import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <p className="text-lg text-gray-300">
        Sobre mim...
        <Link href="/" className="text-blue-500 hover:underline ml-2">
          Ir para home
        </Link>
      </p>
    </div>
  );
}
