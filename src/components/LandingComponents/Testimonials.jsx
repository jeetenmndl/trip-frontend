
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: '👩‍🦰',
      text: 'TripHub completely changed how I plan my vacations. The collaborative features made it so easy to coordinate with my family!',
      rating: 5,
    },
    {
      name: 'Marco Chen',
      location: 'Singapore',
      image: '👨‍💼',
      text: 'The best travel planning app I\'ve used. The itinerary organization and budget tracking are lifesavers for my adventures.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      location: 'London, UK',
      image: '👩‍🎤',
      text: 'Amazing experience! I discovered so many hidden gems thanks to the destination recommendations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Alex Rodriguez',
      location: 'Mexico City, Mexico',
      image: '👨‍🎨',
      text: 'Finally, a travel app that understands what travelers need. The real-time updates kept everyone in sync perfectly.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-card text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy travelers who trust TripHub for their adventures
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-background border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
