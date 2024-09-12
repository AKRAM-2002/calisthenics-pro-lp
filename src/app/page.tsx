
'use client'; //  Mark this component as a Client Component

import { useEffect } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import NewsletterSection from "./components/NewsletterSection";
import PricingSection from "./components/PricingSection";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialsSection from "./components/Testimonials";
import TransformationSection from "./components/TransformSection";
import UserProfile from "./components/UserProfile";
import DashboardPage from "./dashboard/page";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if(isLoaded && isSignedIn){
    router.push('/dashboard');
    return null;
  }

  

  return (
    <Layout>
      
     
      <Hero />
      <Features />
      <TransformationSection />
      <ProductShowcase />
      <PricingSection />
      <TestimonialsSection />
      <NewsletterSection />
      
    </Layout>
  );
}