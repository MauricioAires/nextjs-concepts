export default async function ProductPage({ params }) {
  const { product } = await params;

  // Search within the database
  return (
    <div>
      <h1>Páginas do produto {product}</h1>
    </div>
  );
}
