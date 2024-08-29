import Footer from './Footer'
import Navbar from './Navbar'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  )
}