"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsPranayama from "@/components/WhatIsPranayama";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import Optimize from "@/components/Optimize";
import Locations from "@/components/Locations";
import Tools from "@/components/Tools";
import About from "@/components/About";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <WhatIsPranayama />
      <About />
      <Optimize />
      <Locations />
      <Tools />
      <Instructor />
      {/* <Benefits /> */}
      <Testimonials />
      <FAQ />
      {/* <Events /> */}
      <Footer />
    </div>
  );
}
