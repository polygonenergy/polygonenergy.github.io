const Applications = () => {
  return (
    <section id="applications" className="container mx-auto py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">Applications</h2>
        <p className="text-muted-foreground mt-2">Where RF-DC batteries and the Micro Charger fit.</p>
      </div>
      <div className="rounded-lg overflow-hidden border">
        <img
          src="/lovable-uploads/3d0d01ea-6e01-45b8-bfdf-0ae685fcbf01.png"
          alt="Applications slide showing many use cases: IoT sensors, toys, drones, peripherals, wearables, cameras, phones, power banks, laptops, readers, e‑cigarettes, medical devices, lights, and more"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Applications;
