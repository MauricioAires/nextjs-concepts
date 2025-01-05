"use client";

import Link from "next/link";

// Pagina de fallback
export default function TodoEditErrorPage() {
  return (
    <div>
      <p>Ocorreu um problema, tente novamente mais tarde.</p>

      <Link href="/">Voltar para home</Link>
    </div>
  );
}
