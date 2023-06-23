"use client";
import CrosshairLogo from "./icons/CrosshairLogo";
import { FiMenu } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const paginas = [
    {
      p: "Agentes",
      classHref: "/agentes",
    },
    {
      p: "Jugadores",
      classHref: "/jugadores",
    },
  ];

  return (
    <div className="lg:px-5 py-2 cursor-default block text-center relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${isOpen ? "text-white" : "text-rose-600"} transition rounded-lg items-center justify-between`}
      >
        <p className="transition hover:text-white">Tablas</p>
      </button>
      {isOpen ? (
        <div className="border border-[#e11d48] bg-gray-900 absolute pl-10 pr-10 top-10 lg:top-16 left-0 w-full flex flex-wrap items-start rounded-lg p-2 justify-center cursor-default rounded-r-lg border-left-trasparent z-10">
          {paginas.map((pagina, i) => (
            <Link href={pagina.classHref} key={i}>
              <p className="block px-4 py-2 transition cursor-default  hover:text-white sm:w-full sm:justify-center">
                {pagina.p}
              </p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default function Navmenu() {
  const [openNav, setOpenNav] = useState(false);
  const [textButton, setTextButton] = useState(<Link
    href="#"
    className="lg:px-5 py-2 cursor-default block text-center text-gray-900 no-underline bg-rose-600 rounded transition hover:text-rose-600 hover:bg-white">
    Cargando...
    </Link>);



   //   checkeo login con cookie
   useEffect(() => {
    const checkLoggedIn = async () => {
      const response = await fetch("/api/perfilHandler", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      // mientras carga la respuesta, modifica el texto del boton y ponle un spinner
      setTextButton(<Link
        href={`/`}
        className="lg:px-5 py-2 cursor-default block text-center text-gray-900 no-underline bg-rose-600 rounded transition hover:text-rose-600 hover:bg-white">
        Cargando...
        </Link>)

      if (response.status === 200) {
        const resJson = await response.json();
        console.log(resJson);
        setTextButton(<Link
        href={`/perfil`}
        className="lg:px-5 py-2 cursor-default block text-center text-gray-900 no-underline bg-rose-600 rounded transition hover:text-rose-600 hover:bg-white">
        {resJson.name}
        </Link>) 
        console.log("estas logeado");
      }
      if (response.status !== 200) {
        setTextButton(<Link
          href={`/login`}
          className="lg:px-5 py-2 cursor-default block text-center text-gray-900 no-underline bg-rose-600 rounded transition hover:text-rose-600 hover:bg-white">
          Login 
          </Link>) 
        console.log("no estas logeado");
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <header className="border-b border-rose-600 bg-gray-900 shadow-md py-3">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        {/* logo */}
        <div className="flex px-2 fill-rose-600 text-rose-600 transition hover:fill-white hover:text-white">
          <CrosshairLogo className="w-9 mr-2" />
          <a href="#" className="cursor-default py-1.5 font-VALORANT text-2xl">
            VAlortrack
          </a>
        </div>

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer text-rose-600"
          onClick={() => setOpenNav(!openNav)}
        />

<nav className={`${openNav ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto transition-opacity duration-200 ease-in`}>

          <ul className="text-base text-rose-600 lg:flex lg:justify-between">
            <li>
              <Link
                href="/"
                className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white"
              >
                Inicio
              </Link>
            </li>
            <li className="relative" >
              <Dropdown />
            </li>
            <li>
              <Link
                href="/infografias"
                className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white"
              >
                Infografias
              </Link>
            </li>
            <li>
              <Link
                href="/composiciones"
                className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white"
              >
                Composiciones
              </Link>
            </li>
            <li>
            {textButton && <div>{textButton}</div>}
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}
