"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex gap-6 items-center justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
      <button className="sm:hidden">
        <MdMenu size={24} />
      </button>
      <ul className="flex gap-4 items-center">
        <li className="border-2 rounded-md py-2 px-1 font-bold ">
          <Link href={"/"}>DevJourney</Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href={"/"}
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href={"/cursos"}
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
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
      <h1 className="sm:hidden">DevJourney - Página inicial</h1>
    </nav>
  );
};
