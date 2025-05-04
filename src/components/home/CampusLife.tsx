
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=500&auto=format&fit=crop",
    title: "Student Activities",
  },
  {
    url: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=500&auto=format&fit=crop",
    title: "Modern Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop",
    title: "Library Resources",
  },
  {
    url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=500&auto=format&fit=crop",
    title: "Sports Complex",
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=500&auto=format&fit=crop",
    title: "Research Labs",
  },
];

const CampusLife = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('.campus-image');
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('animate-scale-in');
                img.classList.remove('opacity-0');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-college-50 to-white dark:from-college-900 dark:to-college-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-college-800 dark:text-college-300 mb-4">Campus Life</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Experience a vibrant and diverse campus community with modern facilities, exciting activities, and a supportive environment that fosters both academic and personal growth.
          </p>
        </div>
        
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {campusImages.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "campus-image relative group overflow-hidden rounded-lg opacity-0",
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              )}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: index === 0 ? '600px' : '300px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/gallery">
            <Button className="bg-college-600 hover:bg-college-700 text-white">
              Explore Campus Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
