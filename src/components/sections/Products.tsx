const Products = () => {
  const products = [
    {
      title: "RF-DC Self-Charging Batteries",
      image: "/lovable-uploads/46635dd6-8d6e-4c4c-a33f-417ea88da683.png",
      alt: "Polygon Energy RF-DC battery prototype with clip-on circuit",
      features: [
        "RF-DC conversion inside the battery extends usable mAh and runtime",
        "Battery management firmware learns usage patterns for smart energy availability", 
        "Designed for devices from drones to consumer electronics"
      ]
    },
    {
      title: "Polygon Micro Charger (for smartphones)",
      image: "/lovable-uploads/fc686d1e-f6bd-4607-9706-ca4c859d738b.png",
      alt: "Polygon Micro Charger product slide",
      features: [
        "Compact dongle receiver pairs with an indoor transmitter",
        "Supports popular connectors and convenient, cable-free top-ups",
        "Great for older devices before native RF-DC batteries"
      ]
    }
  ];

  return (
    <section id="products" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <h2 className="animate-fade-in">
            Products
          </h2>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Two ways to bring wireless power to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="card-professional space-y-6 animate-fade-in"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                {product.title}
              </h3>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="relative z-10 w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <ul className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-professional leading-relaxed">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
