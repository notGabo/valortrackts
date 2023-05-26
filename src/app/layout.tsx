import Navbar from '@/components/Navbar'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })


export const metadata = {
  title: 'Valortrack',
  description: 'Portafolio de titulo - Alvaro Arenas, Gabriel Soto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={rubik.className}>
        <div className='grid min-h-screen place-content-center bg-gray-950'>
            <div className='sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1250px]' >
            <Navbar/>
            {children}
            </div>
          </div>
        </body>
    </html>
  )
}
