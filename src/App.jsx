import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuisnessOverview from "./components/BuisnessOverview";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-white">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
            `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />

        {/* Content */}
        <Navbar />
        <main className="">
          <Hero />
          <BuisnessOverview />
        </main>
      </div>
    </>
  );
};

export default App;
