import Link from "next/link";
import CrosshairLogo from "./icons/CrosshairLogo";

const Footer = () => {
  return (
    <div>
    {/* <footer className="mx-auto max-w-screen-2xl px-4 md:px-8"> */}
    <footer className="absolute bottom-0 w-full h-20 bg-gray-900">
      <div className="bg-gray-900  px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4">
              <Link
                className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                href="#"
              >
                <CrosshairLogo className="fill-white" width={"35px"} />
                <span className="font-VALORANT">VAlortrack</span>
              </Link>
            </div>
            <p className="mb-6 text-gray-400 sm:pr-8">
              Proyecto de portfolio de titulo Analista Programador. Duoc UC Sede
              Maipú.
            </p>
          </div>
          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Enlaces
            </p>
            <nav className="flex flex-col gap-4">
              <div className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-indigo-600">
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Duoc UC
                </Link>
              </div>
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Recursos utilizados
                </Link>
              </div>
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Contacto
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Nosotros
            </p>
            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  @Alvaro-AAC
                </Link>
              </div>
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  @notGabo
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Documentacion
            </p>
            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Repositorio front end
                </Link>
              </div>
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Repositorio back end
                </Link>
              </div>
              <div>
                <Link
                  className="text-gray-400 transition duration-100 hover:text-rose-500 active:text-rose-600"
                  href="#"
                >
                  Diagramas
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <p className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          © 2023 - Alvaro Arenas | Gabriel Soto.
        </p>
        </div>
    </footer>
    </div>
    );
    
};
export default Footer;
