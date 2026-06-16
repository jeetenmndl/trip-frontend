
import { MapPin, Compass, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: MapPin,
      title: 'Smart Planning',
      description: 'Plan your trips with intuitive tools and real-time updates',
    },
    {
      icon: Compass,
      title: 'Explore Destinations',
      description: 'Discover hidden gems and popular spots around the world',
    },
    {
      icon: Users,
      title: 'Travel Together',
      description: 'Collaborate with friends and share unforgettable experiences',
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Why Choose TripHub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to plan, organize, and enjoy your perfect trip
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* About Text */}
        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground leading-relaxed mb-6">
            TripHub is your comprehensive travel companion designed to make trip planning
            effortless and enjoyable. Whether you&apos;re planning a weekend getaway or a
            month-long adventure, our platform provides all the tools you need to create,
            organize, and share your travel experiences.
          </p>
          <p className="text-center text-muted-foreground leading-relaxed">
            From itinerary creation to budget tracking and real-time collaboration with
            fellow travelers, we&apos;ve got you covered every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
