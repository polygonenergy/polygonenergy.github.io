import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import Preorder from "@/components/sections/Preorder";

const Index = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Process />
      <Preorder />
      <footer className="container mx-auto py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Polygon Energy</p>
          <nav className="flex gap-4">
            <a href="#products" className="hover:underline">Products</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#preorder" className="hover:underline">Preorder</a>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default Index;
