const Applications = () => {
  return (
    <section id="applications" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <h2 className="animate-fade-in">
            Applications
          </h2>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Where RF-DC batteries and the Micro Charger fit.
          </p>
        </div>
        <div className="relative animate-fade-in [animation-delay:400ms]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-3xl"></div>
          <div className="glass rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
            <img
              src="/lovable-uploads/3d0d01ea-6e01-45b8-bfdf-0ae685fcbf01.png"
              alt="Applications slide showing many use cases: IoT sensors, toys, drones, peripherals, wearables, cameras, phones, power banks, laptops, readers, e‑cigarettes, medical devices, lights, and more"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
