
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock data for recent events
const events = [
  {
    id: 1,
    title: "Annual Science Exhibition",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    description: "Join us for a showcase of innovative student projects from our Science and Technology departments.",
    image: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=500&auto=format&fit=crop",
    tags: ["Exhibition", "Science"],
  },
  {
    id: 2,
    title: "Career Fair 2025",
    date: "May 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Student Center",
    description: "Connect with over 50 employers from various industries looking to recruit our talented students and alumni.",
    image: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?q=80&w=500&auto=format&fit=crop",
    tags: ["Career", "Networking"],
  },
  {
    id: 3,
    title: "Literary Festival",
    date: "May 25, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "College Library",
    description: "A celebration of literature featuring readings, workshops, and discussions with renowned authors.",
    image: "https://images.unsplash.com/photo-1554357395-dbdc356ca5da?q=80&w=500&auto=format&fit=crop",
    tags: ["Arts", "Literature"],
  },
  {
    id: 4,
    title: "Alumni Reunion Weekend",
    date: "June 5-7, 2025",
    time: "Various Times",
    location: "Across Campus",
    description: "Welcome back our alumni for a weekend of networking, reminiscing, and celebrating the Green College community.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=500&auto=format&fit=crop",
    tags: ["Alumni", "Networking"],
  },
];

const RecentEvents = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-bottom');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.event-card');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-college-50 dark:from-college-950 dark:to-college-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-college-800 dark:text-college-300">Upcoming Events</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Join us for these exciting events happening around campus</p>
          </div>
          <Link to="/events">
            <Button variant="outline" className="border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="event-card hover-card border-t-4 border-t-college-500 opacity-0 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 m-2">
                  <div className="bg-white dark:bg-college-800 shadow rounded p-2 flex flex-col items-center">
                    <Calendar className="h-4 w-4 text-college-600 dark:text-college-400" />
                    <span className="text-xs font-medium mt-1 text-college-700 dark:text-college-300">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-xs font-bold text-college-800 dark:text-college-200">
                      {event.date.split(' ')[1].replace(',', '')}
                    </span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{event.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-college-100 text-college-700 dark:bg-college-800 dark:text-college-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium">Time:</span> {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Location:</span> {event.location}
                  </div>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2 mt-2">
                  {event.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Link 
                  to={`/events/${event.id}`}
                  className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 inline-flex items-center"
                >
                  Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
