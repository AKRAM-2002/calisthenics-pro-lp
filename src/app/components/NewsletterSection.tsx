'use client'
import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
    // Reset the email input
    setEmail('');
  };

  return (
    <section className="bg-[#097FD9] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe our Fitness & Calisthenics tips
          </h2>
          <p className="text-white mb-6">
            Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.
          </p>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;