import { Globe, Handshake, Network, Star } from 'lucide-react';

export function Connections() {
  const connections = [
    {
      id: 1,
      name: 'Global Airlines',
      category: 'Travel Partner',
      icon: Globe,
      description: 'Connecting you to exclusive flight deals and partnerships worldwide',
    },
    {
      id: 2,
      name: 'Adventure Guides',
      category: 'Experience Partner',
      icon: Handshake,
      description: 'Expert guides for unforgettable travel experiences',
    },
    {
      id: 3,
      name: 'Hotel Network',
      category: 'Accommodation',
      icon: Network,
      description: 'Access to premium accommodations across 150+ destinations',
    },
    {
      id: 4,
      name: 'Travel Insurance Pro',
      category: 'Security Partner',
      icon: Star,
      description: 'Comprehensive coverage for safe and worry-free travels',
    },
    {
      id: 5,
      name: 'Local Experiences',
      category: 'Cultural Partner',
      icon: Globe,
      description: 'Authentic local experiences and cultural immersion programs',
    },
    {
      id: 6,
      name: 'Payment Solutions',
      category: 'Financial Partner',
      icon: Handshake,
      description: 'Secure, multi-currency payment options for global travelers',
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Connections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted partners bringing you the best travel experiences and services
          </p>
        </div>

        {/* Connections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {connections.map((connection) => {
            const Icon = connection.icon;
            return (
              <div
                key={connection.id}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {connection.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {connection.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {connection.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Through our extensive network of trusted partners, we ensure you get the
            best value, service, and experience for every aspect of your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
