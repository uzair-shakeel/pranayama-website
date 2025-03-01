"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
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

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="Pranayama">
        <WhatIsPranayama />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="Programa">
        <Optimize />
      </section>
      <section id="Eventos">
        <Locations />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="Instructor">
        <Instructor />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="Testimonios">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}
