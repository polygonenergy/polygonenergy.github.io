import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import Preorder from "@/components/sections/Preorder";
import ValueProps from "@/components/sections/ValueProps";
import Applications from "@/components/sections/Applications";
import Gallery from "@/components/sections/Gallery";

const Index = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Process />
      <ValueProps />
      <Applications />
      <Preorder />
      <Gallery />
      <footer className="section-seamless py-16 border-t border-border/20">
        <div className="container-professional">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Polygon Energy — Wireless is the future
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Products</a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Process</a>
              <a href="#value" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Value</a>
              <a href="#applications" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Applications</a>
              <a href="#preorder" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Preorder</a>
              <a href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Gallery</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
