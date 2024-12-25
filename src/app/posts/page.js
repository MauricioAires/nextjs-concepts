import Link from "next/link";

export default function PostsPage() {
  const postsIds = [1, 2, 3];
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <p className="text-lg text-gray-300">Posts</p>

      <ul>
        {postsIds.map((id) => (
          <li key={id}>
            <Link
              href={`/posts/${id}`}
              className="text-blue-500 hover:underline ml-2"
            >
              Ver post {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
