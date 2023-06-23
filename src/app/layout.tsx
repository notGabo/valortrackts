import "./globals.css";
import localFont from "next/font/local";
import Navmenu from "./components/Navbarv3";
import Footer from "./components/Footer";

const valorant = localFont({
  src: "../../public/fonts/ValorantFont.ttf",
  variable: "--font-valorant",
});

export const metadata = {
  title: "Valortrack",
  description: "Portafolio de título - Alvaro Arenas, Gabriel Soto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${valorant.variable}`}>
      <body className="bg-gray-950 flex flex-col min-h-screen" suppressHydrationWarning={true} >
        <div className="relative">
          
          <Navmenu />
          {children}
       
          <Footer />
        </div>
      </body>
    </html>
  );
}
