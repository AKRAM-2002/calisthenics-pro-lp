'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';

interface PricingOptionProps {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
  onClick: () => void;
}

const PricingOption: React.FC<PricingOptionProps> = ({ title, price, features, isPopular, onClick }) => (
  <motion.div
    className={`bg-[#0D0D0D] rounded-lg p-6 flex flex-col ${
      isPopular ? 'border-2 border-[#097FD9]' : ''
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {isPopular && (
      <div className="bg-[#097FD9] text-white text-xs font-bold py-1 px-2 rounded-full self-end mb-2">
        Best Offer
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-4">${price}</p>
    <p className="text-sm text-gray-400 mb-4">per month/bill annually</p>
    <ul className="flex-grow">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center mb-2">
          <MdCheckCircle className="text-[#097FD9] mr-2" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={onClick}
      className={`mt-4 py-2 px-4 rounded-full font-semibold ${
        isPopular
          ? 'bg-[#097FD9] text-white'
          : 'bg-blue-100 text-[#097FD9]'
      }`}
    >
      Register Now
    </button>
  </motion.div>
);

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingOptions = [
    {
      title: 'Basic Package',
      price: billingCycle === 'monthly' ? '25' : '250',
      features: [
        'Unlimited Gym Access',
        '2x Fitness Consultant',
        'Nutrition Tracking',
        '1x Free Supplement',
        '3 Days per week',
        'Personal Trainer',
      ],
    },
    {
      title: 'Mid Package',
      price: billingCycle === 'monthly' ? '55' : '550',
      features: [
        'Unlimited Gym Access',
        '4x Fitness Consultant',
        'Nutrition Tracking',
        '3x Free Supplement',
        '5 Days per week',
        'Personal Trainer',
      ],
      isPopular: true,
    },
    {
      title: 'Pro Package',
      price: billingCycle === 'monthly' ? '75' : '750',
      features: [
        'Unlimited Gym Access',
        '7x Fitness Consultant',
        'Nutrition Tracking',
        '5x Free Supplement',
        'Gym Card',
        'Personal Trainer',
      ],
    },
    {
      title: 'Athlete Package',
      price: billingCycle === 'monthly' ? '105' : '1050',
      features: [
        'Unlimited Gym Access',
        'Free Fitness Consultant',
        'All Training Program',
        'Free Supplement',
        'Free Clothes',
        'Gym Card',
      ],
    },
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <h3 className="text-3xl font-bold mb-6">Our List Packages</h3>
        <div className="inline-flex bg-gray-800 rounded-full p-1">
          <button
            className={`py-2 px-4 rounded-full ${
              billingCycle === 'monthly'
                ? 'bg-[#097FD9] text-white'
                : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Billed Monthly
          </button>
          <button
            className={`py-2 px-4 rounded-full ${
              billingCycle === 'yearly'
                ? 'bg-[#097FD9] text-white'
                : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('yearly')}
          >
            Billed Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingOptions.map((option, index) => (
          <PricingOption
            key={index}
            title={option.title}
            price={option.price}
            features={option.features}
            isPopular={option.isPopular ?? false}
            onClick={() => console.log(`Registered for ${option.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;