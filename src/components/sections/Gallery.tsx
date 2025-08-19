const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/2fa91cff-5404-4547-abb5-53cee28493f0.png",
      alt: "Preliminary look of Polygon Energy battery branding",
    },
    {
      src: "/lovable-uploads/46635dd6-8d6e-4c4c-a33f-417ea88da683.png",
      alt: "Battery prototype with clip-on RF-DC circuit",
    },
    {
      src: "/lovable-uploads/9b7ca7fb-6ea7-494b-a056-fe706b47cf9a.png",
      alt: "RF-DC IC U2.0 specifications board imagery",
    },
    {
      src: "/lovable-uploads/6758c2f3-776d-4656-9b2b-da1788070162.png",
      alt: "RF-DC IC U1.0 specifications board imagery",
    },
    {
      src: "/lovable-uploads/5ef993df-52b5-4e87-a8af-7cf872fd1dc6.png",
      alt: "Simplex Micro Charger LED version slide",
    },
    {
      src: "/lovable-uploads/fc686d1e-f6bd-4607-9706-ca4c859d738b.png",
      alt: "Duplex Micro Charger digital version slide",
    },
  ];

  return (
    <section id="gallery" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <h2 className="animate-fade-in">
            Gallery
          </h2>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            A snapshot of our journey from Micro Charger to RF-DC batteries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, index) => (
            <div 
              key={img.src} 
              className="group animate-fade-in hover:transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="glass rounded-2xl overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
