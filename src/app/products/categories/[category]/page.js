import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  return (
    <div>
      <h1>Páginas de categoria de {category}</h1>

      <Link href={`${category}/camisa-gola-verde`}>Camisa Gola verde</Link>
    </div>
  );
}
