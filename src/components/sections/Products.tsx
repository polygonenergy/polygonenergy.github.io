import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <section id="products" className="container mx-auto py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Products</h2>
        <p className="text-muted-foreground mt-2">Two ways to bring wireless power to life.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="transition-transform duration-200 hover:-translate-y-1">
          <CardHeader>
            <CardTitle>RF-DC Self-Charging Batteries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="/lovable-uploads/46635dd6-8d6e-4c4c-a33f-417ea88da683.png"
              alt="Polygon Energy RF-DC battery prototype with clip-on circuit"
              loading="lazy"
              className="rounded-md border"
            />
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>RF-DC conversion inside the battery extends usable mAh and runtime.</li>
              <li>Battery management firmware learns usage patterns for smart energy availability.</li>
              <li>Designed for devices from drones to consumer electronics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform duration-200 hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Polygon Micro Charger (for smartphones)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="/lovable-uploads/fc686d1e-f6bd-4607-9706-ca4c859d738b.png"
              alt="Polygon Micro Charger product slide"
              loading="lazy"
              className="rounded-md border"
            />
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Compact dongle receiver pairs with an indoor transmitter.</li>
              <li>Supports popular connectors and convenient, cable-free top-ups.</li>
              <li>Great for older devices before native RF-DC batteries.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Products;
