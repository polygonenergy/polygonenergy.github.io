import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "@/components/ui/button";
import { GripVertical, Save, Edit3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Gallery = () => {
  const [isReorderMode, setIsReorderMode] = useState(false);
  const [images, setImages] = useState([
    {
      id: "1",
      src: "/lovable-uploads/30d2332c-b185-4566-80ab-ed912a79ac41.png",
      alt: "B2C and B2B Product overview showing Polygon Energy battery technology and applications",
    },
    {
      id: "2",
      src: "/lovable-uploads/c9c1d958-6dde-40c8-81b4-5737ba62b0e3.png",
      alt: "Product Design Inspiration from Dunge sound mirrors - acoustic mirrors that inspired the Micro Charger shape",
    },
    {
      id: "3",
      src: "/lovable-uploads/cd094231-709f-48ba-8650-18cbfd927985.png",
      alt: "Simplex Micro Charger RF Transmitter technical specifications and features",
    },
    {
      id: "4",
      src: "/lovable-uploads/f8b6416f-9760-439b-8ee7-740e011c1143.png",
      alt: "Hand holding the Polygon Energy Micro Charger device demonstrating its compact size",
    },
    {
      id: "5",
      src: "/lovable-uploads/2fa91cff-5404-4547-abb5-53cee28493f0.png",
      alt: "Preliminary look of Polygon Energy battery branding",
    },
    {
      id: "6",
      src: "/lovable-uploads/46635dd6-8d6e-4c4c-a33f-417ea88da683.png",
      alt: "Battery prototype with clip-on RF-DC circuit",
    },
    {
      id: "7",
      src: "/lovable-uploads/9b7ca7fb-6ea7-494b-a056-fe706b47cf9a.png",
      alt: "RF-DC IC U2.0 specifications board imagery",
    },
    {
      id: "8",
      src: "/lovable-uploads/6758c2f3-776d-4656-9b2b-da1788070162.png",
      alt: "RF-DC IC U1.0 specifications board imagery",
    },
    {
      id: "9",
      src: "/lovable-uploads/5ef993df-52b5-4e87-a8af-7cf872fd1dc6.png",
      alt: "Simplex Micro Charger LED version slide",
    },
    {
      id: "10",
      src: "/lovable-uploads/fc686d1e-f6bd-4607-9706-ca4c859d738b.png",
      alt: "Duplex Micro Charger digital version slide",
    },
    {
      id: "11",
      src: "/lovable-uploads/148151f8-a66c-4bed-a5d5-91ab08288b31.png",
      alt: "Simplex Micro Charger packaging boxes and product presentation",
    },
    {
      id: "12",
      src: "/lovable-uploads/0bc55db5-44be-4d58-afea-dd70b05174f6.png",
      alt: "Simplex Micro Charger high fidelity pre-final prototype with Samsung phone demonstration",
    },
    {
      id: "13",
      src: "/lovable-uploads/e7e88db7-2849-4941-96a2-3bb7f61217dd.png",
      alt: "Simplex Micro Charger receiver dongle circuit board specifications and technical details",
    },
    {
      id: "14",
      src: "/lovable-uploads/7fe2976e-5747-4b46-b905-79d5bf1a3fc3.png",
      alt: "Simplex Micro Charger technical diagrams and stacked disk assembly configurations",
    },
    {
      id: "15",
      src: "/lovable-uploads/0c90d1ad-f71f-4bf9-b3d4-480772007e1f.png",
      alt: "RF-DC circuit board designs Figure 1.2, 1.3 and OEM Disc mockup specifications",
    },
    {
      id: "16",
      src: "/lovable-uploads/7898ebb0-1165-40fc-ac75-f91d55eb6297.png",
      alt: "OEM Energy superimposition using stacked array and polygonally shaped indoor transmitter",
    },
    {
      id: "17",
      src: "/lovable-uploads/e2dc29d8-f6f9-4bf8-be93-0830da6663c8.png",
      alt: "Micro Charger technical product specifications with antenna pattern and power output details",
    },
    {
      id: "18",
      src: "/lovable-uploads/93d6266f-985e-4a05-9a88-11191d0aa088.png",
      alt: "Antenna simulation results for 2.4GHz-5.8GHz frequency with S-Parameters and radiation patterns",
    },
    {
      id: "19",
      src: "/lovable-uploads/2116af28-5f6d-4974-9a5c-4c4414088d7d.png",
      alt: "Proprietary antenna array design with rectenna combination technology specifications",
    },
  ]);

  const { toast } = useToast();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
  };

  const saveOrder = () => {
    setIsReorderMode(false);
    toast({
      title: "Gallery order saved!",
      description: "The image sequence has been locked in.",
    });
  };


  const toggleReorderMode = () => {
    setIsReorderMode(!isReorderMode);
    if (!isReorderMode) {
      toast({
        title: "Reorder mode enabled",
        description: "Drag and drop images to reorder them.",
      });
    }
  };

  return (
    <section id="gallery" className="section-seamless section-padding">
      <div className="container-professional">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="animate-fade-in">
              Gallery
            </h2>
            <div className="flex gap-2">
              <Button
                onClick={toggleReorderMode}
                variant={isReorderMode ? "default" : "outline"}
                size="sm"
                className="animate-fade-in [animation-delay:300ms]"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isReorderMode ? "Exit Reorder" : "Reorder"}
              </Button>
              {isReorderMode && (
                <Button
                  onClick={saveOrder}
                  size="sm"
                  className="animate-fade-in [animation-delay:400ms]"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Order
                </Button>
              )}
            </div>
          </div>
          <p className="text-professional text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            A snapshot of our journey from Micro Charger to RF-DC batteries.
          </p>
        </div>

        {isReorderMode ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="gallery">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {images.map((img, index) => (
                    <Draggable key={img.id} draggableId={img.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`group animate-fade-in hover:transform hover:scale-105 transition-all duration-500 ${
                            snapshot.isDragging ? "z-50 rotate-2 shadow-2xl" : ""
                          }`}
                          style={{
                            animationDelay: `${400 + index * 100}ms`,
                            ...provided.draggableProps.style,
                          }}
                        >
                          <div className="relative">
                            <div
                              {...provided.dragHandleProps}
                              className="absolute top-2 right-2 z-10 bg-background/80 p-2 rounded-lg cursor-grab active:cursor-grabbing opacity-70 hover:opacity-100 transition-opacity"
                            >
                              <GripVertical className="w-4 h-4" />
                            </div>
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.map((img, index) => (
              <div 
                key={img.id} 
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
        )}
      </div>
    </section>
  );
};

export default Gallery;
