import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* Logo and Description */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <div className="flex items-center mb-6 gap-3">
              <Image
                src="/assets/CaliPro-logo.svg"
                width={70}
                height={70}
                alt="Calisthenics athlete"
              />
              <span className="font-bold text-xl">Calisthenics Pro</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Highlight benefits of each exercise, both physical and mental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
            {/* Sitemap */}
            <div>
              <h3 className="font-bold text-lg mb-4">Sitemap</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Terms */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; 2024 Cali Pro</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;