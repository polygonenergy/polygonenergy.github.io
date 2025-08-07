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
              src="/lovable-uploads/88e8e2f7-b49a-40b6-abfe-934d555a91b4.png"
              alt="Polygon Energy battery product montage"
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
              src="/lovable-uploads/55b5c8b1-581c-4b6a-93cc-a333cb645856.png"
              alt="Polygon Energy Micro Charger overview"
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
