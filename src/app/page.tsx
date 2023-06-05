"use client"
import { Fragment, useState} from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Carrusel from "./components/Carrusel";
import Image from "next/image";
import Carta from "./components/Carta";
import HomeBody from "./components/homeBody";

const home = () => {
  return (
    <div className="relative">
        <Carrusel />
        <HomeBody />
    </div>
  );
};

export default home;