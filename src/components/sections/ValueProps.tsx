const ValueProps = () => {
  const benefits = [
    "Longer run time on devices",
    "Longer battery life cycle", 
    "Reduced environmental impact from fewer disposals",
    "Cost savings over time vs. buying many replacement batteries",
    "Wireless recharging or self-replenishing charging",
    "Smart availability of battery power when you need it most",
    "Software-managed battery performance optimization",
    "Enhanced device portability with continuous power availability"
  ];

  return (
    <section id="value" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <h2 className="animate-fade-in">
            Value Proposition
          </h2>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Why RF-DC batteries change how we power devices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-professional group animate-fade-in"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                <p className="text-professional leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
