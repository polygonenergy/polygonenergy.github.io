const Process = () => {
  return (
    <section id="process" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <h2 className="animate-fade-in">
            The Process — New Way vs Old Way
          </h2>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            RF-DC moves from an external dongle to inside the battery itself.
          </p>
        </div>
        <div className="relative animate-fade-in [animation-delay:400ms]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-3xl"></div>
          <div className="glass rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
            <img
              src="/lovable-uploads/1f19c4ec-ffb0-415f-83fe-d54756baa31a.png"
              alt="Illustration of NEW WAY: RF link directly to batteries vs OLD WAY: external phone dongle"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
