"use client";

// Sempre que usar um (hook) => precisa está em um ambiente client

import { useSearchParams } from "next/navigation";

export default function ExamplePage() {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Example Page: {searchParams.get("busca")}</h1>

      <p>Tem o parâmetro de busca {String(searchParams.has("busca"))}</p>
    </div>
  );
}
