import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";

const menuItems = [
  { icon: '⏱️', label: 'Timer', href: '/timer' },
  { icon: '✅', label: 'Tasks', href: '/tasks' },
  { icon: '💬', label: 'Messages', href: '/messages' },
  { icon: '👤', label: 'Profile', href: '/profile' },
  { icon: '⚙️', label: 'Settings', href: '/settings' },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ width: "60px" }}
      animate={{ width: isOpen ? "250px" : "60px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="bg-blue-600 text-white flex flex-col items-center py-6 relative h-screen"
    >
      {/* Menu Icon for Small Screens */}
      <div className="flex items-center justify-between w-full px-4 mb-8">
        <IconMenu2
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <motion.div
            className="absolute right-4 top-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IconX onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </div>

      {/* Logo Section */}
      <motion.div
        className="mb-8 flex items-center"
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src="/assets/califorge.png"
          alt="calipro logo"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        {isOpen && <span className="absolute font-bold text-sm text-black mt-12 ml-16">Pro</span>}
      </motion.div>

      {/* Sidebar Links */}
      {menuItems.map((item, index) => (
        <Link href={item.href} key={index}>
          <div className="my-4 cursor-pointer flex items-center">
            <span className="text-2xl">{item.icon}</span>
            {isOpen && (
              <motion.span
                className="ml-4 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {item.label}
              </motion.span>
            )}
          </div>
        </Link>
      ))}
    </motion.div>
  );
};
