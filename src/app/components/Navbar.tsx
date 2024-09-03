import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-16">
      <div className="text-blue-500 text-2xl font-bold">
        <Image
          src="/assets/CaliPro-logo.svg"
          width={70}
          height={70}
          alt="Calisthenics athlete"
        />
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/program" className="hover:text-blue-500">Program</Link>
        <Link href="/pricing" className="hover:text-blue-500">Pricing</Link>
        <Link href="/community" className="hover:text-blue-500">Community</Link>
        
        <div className="flex gap-2">
          <Link href="/signin">
            <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-white hover:text-black">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}