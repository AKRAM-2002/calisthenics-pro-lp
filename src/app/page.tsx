// import Layout from './components/Layout'
// import Hero from './components/Hero'
// import TransformSection from './components/TransformSection'
// import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
// import Subscribe from './components/Subscribe'

import Features from "./components/Features";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import TransformationSection from "./components/TransformSection";

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Features/>
      <TransformationSection/>
      {/* 
      
      <Pricing />
      <Testimonials />
      <Subscribe /> */}
    </Layout>
  )
}