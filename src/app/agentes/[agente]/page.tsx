"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {CgSpinnerAlt }from 'react-icons/cg';

interface AgenteProps {
  abilities: string[];
  background: string;
  backgroundGradientColors: string[];
  bustPortrait: string;
  description: string;
  displayIcon: string;
  displayIconSmall: string;
  displayName: string;
  fullPortrait: string;
  fullPortraitV2: string;
  isPlayableCharacter: boolean;
  killfeedPortrait: string;
  role: {
    uuid: string;
    displayName: string;
    description: string;
  }
  voiceLine: {
    minDuration: number;
    maxDuration: number;
    mediaList: string[];
  };
}

export default function Agente() {
  const [agenteData, setAgenteData] = useState<AgenteProps | null>(null);

  // get the current url and extract the uuid
  const pathname = usePathname();
  const extractedUuid = pathname.split("/")[2];

  useEffect(() => {
    const getAgente = async () => {
      try {
        const res = await fetch(
          `https://valorant-api.com/v1/agents/${extractedUuid}?language=es-ES`
        );
        const data = await res.json();
        setAgenteData(data.data);
      } catch (error) {
        console.error('Error fetching agent data:', error);
      }
    };

    getAgente();
  }, [extractedUuid]);

  // Wait for agenteData to be loaded before accessing its values
  if (!agenteData) {
    return <div>
      <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center text-rose-600 transition duration-300 hover:scale-110 hover:text-[#0db196]">
      <CgSpinnerAlt className="animate-spin h-32 w-32 text-rose-600" />
      </div>
    </div>
    </div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-7 font-VALORANT text-4xl text-center text-rose-600 transition duration-300 hover:text-white cursor-default">
          {agenteData.displayName}
        </h1>
      </div>
    </>
  );
}
