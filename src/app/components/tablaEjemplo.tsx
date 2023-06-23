"use client"
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import Link from "next/link";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const TABLE_HEAD = ["Nombre de agente", "Rol", "Descripción"];

type Agentes = {
  uuid: string;
  displayIconSmall: string;
  displayName: string;
  role: {
    displayName: string;
  };
  description: string;
};

export function getUuidAgenteFromClick(uuid: string) {
  return uuid;
}

export default function Example() {

  const [agentes, setAgentes] = useState<Agentes[]>([]);

  // todo reemplazar esto por fetch a backend
  useEffect(() => {
    const fetchAgentes = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=True&language=es-ES');
        const agentesFiltered = response.data.data.map(({ uuid, displayIconSmall, displayName, role, description }: Agentes) => ({
          uuid,
          displayIconSmall,
          displayName,
          role: role.displayName,
          description,
        }));
        setAgentes(agentesFiltered);
      } catch (error) {

      }
    };
    fetchAgentes();
  }, []);


  if (!agentes.length){
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center text-rose-600 transition duration-300 hover:scale-110 hover:text-[#0db196]">
        <CgSpinnerAlt className="animate-spin h-32 w-32 text-rose-600" />
        </div>
      </div>
      </div>
    )
  }

  // if agentes.length 
  if (agentes.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center text-rose-600 transition duration-300 hover:scale-110 hover:text-[#0db196]">
          <CgSpinnerAlt className="animate-spin h-32 w-32 text-rose-600" />
          <p className="text-rose-600">No se encontraron agentes. Problema en servidor</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="m-5 bg-gray-900">
      <CardBody className="border rounded-xl border-rose-600">
        <table className=" border-rose-600 w-full table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="text-white cursor-pointer border-rose-600 p-4 w-[20%]"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agentes.map(({ displayIconSmall, displayName, uuid, role, description }, index) => {
              const isLast = index === agentes.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-rose-600 ";

              return (
                <tr key={displayName}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={displayIconSmall} alt={displayName} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="text-white font-normal">
                          {/* link with displayname name as href */}
                          <Link href={`/agentes/${uuid}`}>
                            {displayName}
                          </Link>
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-white font-normal opacity-70"
                        >
                          {uuid}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="text-white font-normal">
                        {role}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="text-white font-normal">
                      {description}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
