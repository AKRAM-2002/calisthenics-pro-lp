'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { TestimonialsCards } from './TestimonialsCards';



const TestimonialsSection = () => {
  



  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
      <div className="absolute -left-36 flex items-center justify-center overflow-hidden">
          <div className="text-[7rem] font-bold text-gray-200 opacity-20 whitespace-nowrap">
          Testimonial
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">What Our Member<br />Say About Us?</h2>
            
            <div className="flex flex-col items-center">
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
          <div className="max-w-[50rem]">
            <div className="flex justify-end mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
            </div>
            <TestimonialsCards/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;