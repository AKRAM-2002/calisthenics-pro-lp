import Image from "next/image";

export const Sidebar = () => {
    const menuItems = [
      { icon: '⏱️', label: 'Timer' },
      { icon: '✅', label: 'Tasks' },
      { icon: '💬', label: 'Messages' },
      { icon: '👤', label: 'Profile' },
      { icon: '⚙️', label: 'Settings' },
    ];
  
    return (
      <div className="bg-blue-600 text-white w-20 flex flex-col items-center py-6">
        <div className="mb-8">
          <span className="text-3xl font-bold">
          <Image
          src="/assets/califorge.png"
          alt="calipro logo"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
          </span>
          <span className="absolute text-sm text-black -mt-8 ml-12">Pro</span>
        </div>
        {menuItems.map((item, index) => (
          <div key={index} className="my-4 cursor-pointer">
            <span className="text-2xl">{item.icon}</span>
          </div>
        ))}
      </div>
    );
  };