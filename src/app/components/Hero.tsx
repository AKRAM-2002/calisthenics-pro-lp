import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex justify-between items-center p-8 mb-16">
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center px-8'>
        <div className="max-w-2xl mb-12 lg:mb-0">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            The all-in-one platform to track, analyze, and improve your calisthenics skills
          </h1>
          <p className="text-xl mb-8">Motivate users with benefits and positive reinforcement, and offer notifications and progress tracking.</p>
          <div className="flex items-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg font-bold">
              Start Your Calisthenics Journey
            </button>
                <div className="flex flex-col ml-4 items-center">
                <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 overflow-hidden">
                    <Image src="/assets/Ellipse 1.png" width={40} height={40} alt="User 1" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2  overflow-hidden">
                    <Image src="/assets/Ellipse 2.png" width={40} height={40} alt="User 2" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2  overflow-hidden">
                    <Image src="/assets/Ellipse 3.png" width={40} height={40} alt="User 3" />
                    </div>
                </div>
                <p className="text-sm text-white-600 mt-2">10k+ Satisfied Customers</p>
                </div>
            </div>
          <div className="mt-12">
            <p className="text-lg font-semibold mb-4 text-white">Trusted By</p>
            <div className="flex space-x-8">
              <Image src="/assets/sponsor1.png" width={60} height={60} alt="Sponsor 1" />
              <Image src="/assets/sponsor2.png" width={60} height={60} alt="Sponsor 2" />
              <Image src="/assets/sponsor3.png" width={160} height={10} alt="Sponsor 3" />
              <Image src="/assets/sponsor4.png" width={60} height={10} alt="Sponsor 4" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden ml-[38rem] mt-24">
          <div className="text-[5rem] font-bold text-gray-200 opacity-20 transform -rotate-90 whitespace-nowrap">
            CALISTHENICS
          </div>
        </div>
        <div className="relative w-[30rem]">
          <Image
            src="/assets/calisthenics-athlete.png"
            height={600}
            width={600}
            alt="Calisthenics athlete"
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  )
}