
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = [
    {
      id: 1,
      title: 'Mountain Adventures',
      image: '/gallery/mountain-adventure.png',
      description: 'Explore breathtaking mountain landscapes',
    },
    {
      id: 2,
      title: 'Beach Escapes',
      image: '/gallery/beach-escape.png',
      description: 'Relax on pristine sandy beaches',
    },
    {
      id: 3,
      title: 'City Exploration',
      image: '/gallery/city-exploration.png',
      description: 'Discover vibrant urban cultures',
    },
    {
      id: 4,
      title: 'Jungle Trekking',
      image: '/gallery/jungle-trekking.png',
      description: 'Adventure through lush rainforests',
    },
    {
      id: 5,
      title: 'Desert Journeys',
      image: '/gallery/desert-journey.png',
      description: 'Experience vast golden deserts',
    },
    {
      id: 6,
      title: 'Island Hopping',
      image: '/gallery/island-hopping.png',
      description: 'Visit multiple tropical islands',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by destinations from around the world
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-background">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative rounded-lg border border-border overflow-hidden">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <img
                src={gallery[currentSlide].image}
                alt={gallery[currentSlide].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-background text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {gallery[currentSlide].title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {gallery[currentSlide].description}
              </p>

              {/* Navigation Buttons */}
              <div className="flex gap-4 justify-center mb-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 justify-center">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-primary/30 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
