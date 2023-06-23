"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    console.log("Realizando búsqueda:", searchQuery);
    router.push('/busqueda');
  };

  

  return (
    <div className="m-9 flex sm:flex-wrap md:flex-wrap">
  <input
    type="text"
    className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring focus:border-rose-600 transition active:border-rose-600"
    placeholder="Player#LAS"
    value={searchQuery}
    onChange={handleInputChange}
    style={{ marginRight: '1rem' }}
  />
  
  <button
    className=" lg:w-1/12 md:4/12 transition rounded-lg bg-rose-600 text-gray-900 hover:bg-white hover:text-rose-600 focus:outline-none focus:ring focus:border-rose-600"
    onClick={handleSearch}
  >
    Buscar
  </button>
</div>




  );
};

export default SearchBar;
