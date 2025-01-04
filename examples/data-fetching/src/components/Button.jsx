"use client";

export function Button({ children }) {
  return (
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
