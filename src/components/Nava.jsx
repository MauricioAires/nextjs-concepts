"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center  p-4 justify-center">
      <ul className="flex flex-row gap-4">
        <li>
          <Link
            className={`link ${pathname === "/" ? "active" : ""} `}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""} `}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
