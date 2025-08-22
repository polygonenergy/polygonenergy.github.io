import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="container-professional">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium animate-fade-in">
                Wireless is the future
              </p>
              <h1 className="animate-fade-in [animation-delay:200ms]">
                Polygon Energy
                <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-normal mt-2 mb-4 leading-relaxed pb-3">
                  RF-DC Batteries & Micro Charger
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-professional leading-relaxed animate-fade-in [animation-delay:400ms] max-w-xl">
                We build self-charging batteries using RF-DC conversion inside the cell, and a Micro Charger for smartphones. Wireless power, now inside your batteries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in [animation-delay:600ms]">
              <a href="#preorder">
                <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
                  Join Preorder
                </Button>
              </a>
              <a href="#process">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[160px]">
                  See Process
                </Button>
              </a>
              <Link to="/work">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                  Market Research
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in [animation-delay:800ms]">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform -rotate-6"></div>
              <img
                src="/lovable-uploads/d7f81015-519c-46b5-b835-e358d9b72b25.png"
                alt="Polygon Energy logo with geometric design and wireless signals"
                width={600}
                height={400}
                loading="eager"
                className="relative z-10 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
