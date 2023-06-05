import "./globals.css";
import localFont from "next/font/local";
import Navmenu from "./components/Navbarv3"; 
import Footer from "./components/Footer" ;
//import Footer from "./components/Footerv2" ;

const valorant = localFont({
  src: "../../public/fonts/ValorantFont.ttf",
  variable: "--font-valorant",
});

export const metadata = {
  title: "Valortrack",
  description: "Portafolio de titulo - Alvaro Arenas, Gabriel Soto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="es" className={`${valorant.variable}`}>
        <body className="bg-gray-950 ">
          <div className="relative min-h-[100vh]">
          <Navmenu/>
          {/* if children has content then render children else render null */}
          {children}
          <Footer  />
          </div>
        </body>

    </html>
  );
}
