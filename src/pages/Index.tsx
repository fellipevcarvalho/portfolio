import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIBuild from "@/components/sections/WhatIBuild";
import Cases from "@/components/sections/Cases";
import Architecture from "@/components/sections/Architecture";
import Stack from "@/components/sections/Stack";
import Connect from "@/components/sections/Connect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <Cases />
        <Architecture />
        <Stack />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
