import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const Preorder = () => {
  const [product, setProduct] = useState("batteries");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const qty = String(data.get("quantity") || "1");
    const notes = String(data.get("notes") || "");

    toast({
      title: "Preorder request received",
      description: `${name} • ${email} • ${product} × ${qty}${notes ? " • " + notes : ""}`,
    });

    e.currentTarget.reset();
    setProduct("batteries");
  }

  return (
    <section id="preorder" className="container mx-auto py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Join the Preorder List</h2>
        <p className="text-muted-foreground mt-2">No payment required. We'll contact you when units are ready.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Alex Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Product</Label>
            <Select value={product} onValueChange={setProduct} name="product">
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="batteries">RF-DC Batteries</SelectItem>
                <SelectItem value="micro-charger">Polygon Micro Charger</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" name="quantity" type="number" min={1} defaultValue={1} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Device notes (optional)</Label>
            <Textarea id="notes" name="notes" placeholder="Tell us about your device or use case" className="min-h-[180px]" />
          </div>
          <Button type="submit" size="lg" className="w-full">Request Preorder</Button>
        </div>
      </form>
    </section>
  );
};

export default Preorder;
