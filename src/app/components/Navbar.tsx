import Image from "next/image";

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
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Program</a>
          <a href="#" className="hover:text-blue-500">Pricing</a>
          <a href="#" className="hover:text-blue-500">Community</a>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-white hover:text-black">Login</button>
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Register</button>
          </div>
        </div>
      </nav>
    )
  }