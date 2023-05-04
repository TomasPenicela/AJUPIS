import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className="w-full h-screen font-bodyFont bg-bgColor text-textLight
   overflow-x-hidden overflow-y-scroll">
    <Navbar />
   </main>
  ) 
}
