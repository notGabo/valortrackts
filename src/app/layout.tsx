import Navbar from "@/components/Navbar";
import "./globals.css";
import localFont from "@next/font/local";
import { Rubik } from "next/font/google";
import Navbarv2 from "@/components/Navbarv2";
import FormSearchUser from "@/components/FormSearchUser";
import Footer from "@/components/Footer";
import UserCardInfo from "@/components/UserCardInfo";

const rubik = Rubik({ subsets: ["latin"] });
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
    // <html lang="es">
    //    { /* <body className={rubik.className} > */}
    //    <body className={`${valorant.variable}`}>
    //     <div className='grid min-h-screen place-content-center bg-gray-950'>
    //         <div className='sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1250px]' >
    //         {children}
    //         </div>
    //       </div>
    //     </body>
    // </html>
    <html lang="es" className={`${valorant.variable}`}>
        <body className="bg-gray-950" >
        
          <Navbarv2 />
          <FormSearchUser />
          <UserCardInfo />  
          <Footer  />
        </body>

    </html>
  );
}
