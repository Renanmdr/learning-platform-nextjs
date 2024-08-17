"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center justify-center bg-primary py-4">
      <ul className="flex gap-4 items-center">
        <li className="border-2 rounded-md py-2 px-1 font-bold ">
          <Link href={"/"}>DevJourney</Link>
        </li>
        <li>
          <Link
            href={"/"}
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página inicial
          </Link>
        </li>
        <li>
          <Link
            href={"/cursos"}
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/Renanmdr/learning-platform-nextjs"}
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <FaGithub />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
