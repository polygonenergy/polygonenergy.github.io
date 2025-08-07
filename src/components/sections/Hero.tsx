import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <header className="container mx-auto py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Wireless is the future</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Polygon Energy — RF-DC Batteries & Micro Charger
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We build self-charging batteries using RF-DC conversion inside the cell, and a Micro Charger for smartphones. Wireless power, now inside your batteries.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#preorder"><Button size="lg">Join Preorder</Button></a>
            <a href="#process"><Button variant="secondary" size="lg">See Process</Button></a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/5015154e-5d8d-4cc7-b951-72ac4a81d871.png"
            alt="Polygon Energy logo banner on black background"
            width={560}
            height={315}
            loading="eager"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
