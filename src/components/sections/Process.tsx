const Process = () => {
  return (
    <section id="process" className="container mx-auto py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">The Process — New Way vs Old Way</h2>
        <p className="text-muted-foreground mt-2">RF-DC moves from an external dongle to inside the battery itself.</p>
      </div>
      <div className="rounded-lg overflow-hidden border">
        <img
          src="/lovable-uploads/41df9d1d-27d6-4774-9916-58f72db2a35a.png"
          alt="Diagram showing new way (batteries charged via RF-DC directly) versus old way (external phone dongle)"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Process;
