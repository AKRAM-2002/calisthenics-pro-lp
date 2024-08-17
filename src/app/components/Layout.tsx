import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  )
}