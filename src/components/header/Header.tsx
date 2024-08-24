"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("DevJourney");
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false); //fecha o Drawer depois de clicar no link
  }, [currentPath]);
  return (
    <nav className="flex gap-6 items-center justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>
      <ul
        className="flex gap-4 items-center"
        tabIndex={drawer ? -1 : undefined}
      >
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

      <div
        data-open={drawer}
        onClick={() => setDrawer(false)}
        tabIndex={drawer ? undefined : -1}
        className="bg-gradient-to-r from-background fixed top-0 left-0  bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
      >
        <ul
          className="flex gap-4 p-4 flex-col w-60 h-full  bg-background"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="">
            <Link
              href={"/"}
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Página inicial
            </Link>
          </li>
          <li className="">
            <Link
              href={"/cursos"}
              data-active={currentPath === "/cursos"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li className="">
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
      </div>
      <h1 className="sm:hidden">{title}</h1>
    </nav>
  );
};
