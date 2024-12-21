import Hero from "@/components/ui/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* <head></head> */}
      <div className="w-full h-screen bg-bgcolor bg-grid-white/[0.1] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bgcolor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Hero />
        {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p> */}
      </div>
    </>
  );
}
