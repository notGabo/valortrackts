"use client"
import CrosshairLogo from "./icons/CrosshairLogo";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function Navmenu() {
  const [openNav, setOpenNav] = useState(false);

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

        <nav
          className={`${
            openNav ? "block " : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto transition-max-height duration-300 ease-in-out`}
        >
          <ul className="text-base text-rose-600 lg:flex lg:justify-between">
            <li>
              <Link href="/" className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white">
                Inicio
              </Link>
            </li>
            <li className="relative">
              <a href="tablas" className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white">
                Tablas
              </a>
              <ul className="absolute left-0 mt-2 bg-gray-900 text-white divide-y divide-gray-700 rounded-md shadow-lg hidden">
                <li>
                  <Link href="/agentes" className="block px-4 py-2 hover:text-rose-600">
                    Agentes
                  </Link>
                </li>
                <li>
                  <Link href="/jugadores" className="block px-4 py-2 hover:text-rose-600">
                    Jugadores
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/infografias" className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white">
                Infografias
              </Link>
            </li>
            <li>
              <Link href="/composiciones" className="lg:px-5 py-2 cursor-default block text-center transition hover:text-white">
                Composiciones
              </Link>
            </li>
            <li>
              <Link href="/login" className="lg:px-5 py-2 cursor-default block text-center text-gray-900 no-underline bg-rose-600 rounded transition hover:text-rose-600 hover:bg-white">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
