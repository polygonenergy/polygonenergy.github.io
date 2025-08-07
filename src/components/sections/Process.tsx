const Process = () => {
  return (
    <section id="process" className="container mx-auto py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">The Process — New Way vs Old Way</h2>
        <p className="text-muted-foreground mt-2">RF-DC moves from an external dongle to inside the battery itself.</p>
      </div>
      <div className="rounded-lg overflow-hidden border">
        <img
          src="/lovable-uploads/1f19c4ec-ffb0-415f-83fe-d54756baa31a.png"
          alt="Illustration of NEW WAY: RF link directly to batteries vs OLD WAY: external phone dongle"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Process;
