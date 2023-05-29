"use client"
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import CrosshairLogo from "./icons/CrosshairLogo"; 


export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="text-rose-600  mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal hover:text-white"
      >
        <a href="#" className="flex items-center">
          Tablas
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal hover:text-white"
      >
        <a href="#" className="flex items-center">
          Infografias
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal hover:text-white"
      >
        <a href="#" className="flex items-center">
          Composiciones
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal hover:text-white"
      >
        <a href="#" className="flex items-center">
          Perfil
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-gray-900">
        <div className="flex items-center justify-between text-rose-600">
          <div className="flex">
            <CrosshairLogo  className="fill-rose-600 w-9 mr-2"/>
          <Typography
            as="a"
            href="#"
            className="cursor-pointer py-1.5 font-VALORANT text-xl"
          >
             VAlortrack
          </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-rose-600"
            >
              <span>Iniciar sesion</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden pr-10 mb-5"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="text-rose-600 mb-2">
            <span>Iniciar Sesion</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}