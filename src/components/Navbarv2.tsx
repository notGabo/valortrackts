"use client";

import { useState } from "react";
import Link from "next/link";
import CrosshairLogo from "@/components/icons/CrosshairLogo";

const Navbarv2 = () => {
  const [isDropdownOpenTablas, setIsDropdownOpenTablas] = useState(false);
  const toggleDropdownTablas = () => {
    setIsDropdownOpenTablas(!isDropdownOpenTablas);
  };

  const [isDropdownOpenPerfil, setIsDropdownOpenPerfil] = useState(false);
  const toggleDropdownPerfil = () => {
    setIsDropdownOpenPerfil(!isDropdownOpenPerfil);
  };

  const [isDropdownLogin, setIsDropdownOpenLogin] = useState(false);
  const toggleDropdownLogin = () => {
    setIsDropdownOpenLogin(!isDropdownLogin);
  };

  const [isDropdownRegister, setIsDropdownOpenRegister] = useState(false);
  const toggleDropdownRegister = () => {
    setIsDropdownOpenRegister(!isDropdownRegister);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-900">
      <div className="mx-auto bg-gray-900 px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link className="mr-8 inline-flex items-center" href="#">
              <span className="text-2xl text-white">
                <div className="font-size:inheritcolor:inherit;padding:2px">
                  <CrosshairLogo className="fill-rose-600" width={"35px"} />
                </div>
              </span>
              <span className="ml-2 font-VALORANT text-xl font-bold tracking-wide text-rose-600 lg:text-rose-600">
                VAlortrack
              </span>
            </Link>
            <ul className="hidden items-center space-x-8 text-rose-600 lg:flex">
              <li>
                <button
                  onClick={toggleDropdownPerfil}
                  className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200 focus:outline-none"
                >
                  Mi perfil
                </button>
                {isDropdownOpenPerfil && (
                  <div className="absolute mt-2 w-48 divide-y divide-gray-200 rounded-md bg-gray-900 shadow-lg ring-4 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Iniciar Sesion
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Registrarse
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Cerrar sesion
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      ></Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={toggleDropdownTablas}
                  className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200 focus:outline-none"
                >
                  Tablas
                </button>
                {isDropdownOpenTablas && (
                  <div className="absolute mt-2 w-48 divide-y divide-gray-200 rounded-md bg-gray-900 shadow-lg ring-4 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Agentes
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Top jugadores
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-rose-600"
                        passHref
                      >
                        Mapas
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200"
                  href="#"
                >
                  Infografias
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200"
                  href="#"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <ul className="hidden items-center space-x-8 lg:flex">
            <li>
              <button
                onClick={toggleDropdownLogin}
                className="hover:text-teal-accent-400 font-medium tracking-wide text-rose-600 transition-colors duration-200 focus:outline-none"
              >
                Iniciar Sesion
              </button>
              {isDropdownLogin && (
                <div className="absolute mt-2 w-48 divide-y divide-gray-200 rounded-md bg-gray-900 shadow-lg ring-4 ring-black ring-opacity-5">
                  {/* little form to login */}
                  <form className="px-4 py-6">
                    <div className="relative mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="focus:shadow-outline w-full appearance-none rounded border-b-2 border-rose-600 bg-gray-900 px-4 py-1 text-rose-600 placeholder-rose-900 focus:border-rose-600 focus:outline-none"
                      />
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="focus:shadow-outline w-full appearance-none rounded border-b-2 border-rose-600 bg-gray-900 px-4 py-1 text-rose-600 placeholder-rose-900 focus:border-rose-600 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 block w-full transform rounded-md bg-rose-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-green-800 focus:bg-rose-500 focus:outline-none"
                    >
                      Entrar
                    </button>
                  </form>
                </div>
              )}
            </li>

            <li>
              <Link
                className="focus:shadow-outline rounded-global inline-flex h-12 items-center justify-center bg-rose-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                href="#"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
            >
              <span className="w-fit">
                <svg
                  className={`w-5 ${
                    isMobileMenuOpen ? "text-gray-600" : "text-white"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="mt-2 pb-3 space-y-3 px-4">
            <li>
              <button
                onClick={toggleDropdownPerfil}
                className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200 focus:outline-none"
              >
                Mi perfil
              </button>
              {isDropdownOpenPerfil && (
                <div className="mt-2 pl-2 space-y-2">
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Iniciar Sesion
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Registrarse
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Cerrar sesion
                  </Link>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleDropdownTablas}
                className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200 focus:outline-none"
              >
                Tablas
              </button>
              {isDropdownOpenTablas && (
                <div className="mt-2 pl-2 space-y-2">
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Agentes
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Top jugadores
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-rose-600"
                    passHref
                  >
                    Mapas
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200"
                href="#"
              >
                Infografias
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200"
                href="#"
              >
                About us
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdownLogin}
                className="hover:text-teal-accent-400 font-medium tracking-wide transition-colors duration-200 focus:outline-none"
              >
                Iniciar Sesion
              </button>
              {isDropdownLogin && (
                <div className="mt-2 pl-2 space-y-2">
                  {/* little form to login */}
                  <form>
                    <div className="relative mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="focus:shadow-outline w-full appearance-none rounded border-b-2 border-rose-600 bg-gray-900 px-4 py-1 text-rose-600 placeholder-rose-900 focus:border-rose-600 focus:outline-none"
                      />
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="focus:shadow-outline w-full appearance-none rounded border-b-2 border-rose-600 bg-gray-900 px-4 py-1 text-rose-600 placeholder-rose-900 focus:border-rose-600 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 block w-full transform rounded-md bg-rose-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-green-800 focus:bg-rose-500 focus:outline-none"
                    >
                      Entrar
                    </button>
                  </form>
                </div>
              )}
            </li>
            <li>
              <Link
                className="focus:shadow-outline rounded-global inline-flex h-12 items-center justify-center bg-rose-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                href="#"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbarv2;
