
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Video, Users, BookOpen, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for gallery items
const galleryItems = {
  campus: [
    {
      id: 1,
      title: "Main Campus Building",
      image: "https://images.unsplash.com/photo-1565015793441-d5e8dfaa63d8?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 2,
      title: "Modern Library Interior",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 3,
      title: "Science Building",
      image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 4,
      title: "Student Center",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 5,
      title: "Campus Green",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 6,
      title: "Athletic Complex",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 7,
      title: "Research Laboratory",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
    {
      id: 8,
      title: "Performance Arts Center",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800&auto=format&fit=crop",
      category: "campus",
    },
  ],
  events: [
    {
      id: 9,
      title: "Annual Graduation Ceremony",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
    {
      id: 10,
      title: "Science Fair",
      image: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
    {
      id: 11,
      title: "Career Fair",
      image: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
    {
      id: 12,
      title: "Cultural Festival",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
    {
      id: 13,
      title: "Guest Speaker Series",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
    {
      id: 14,
      title: "Sports Tournament",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      category: "events",
    },
  ],
  students: [
    {
      id: 15,
      title: "Study Group Session",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      category: "students",
    },
    {
      id: 16,
      title: "Laboratory Research",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      category: "students",
    },
    {
      id: 17,
      title: "Outdoor Learning",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
      category: "students",
    },
    {
      id: 18,
      title: "Student Clubs & Activities",
      image: "https://images.unsplash.com/photo-1517456215894-407bde55e1b0?q=80&w=800&auto=format&fit=crop",
      category: "students",
    },
  ],
  facilities: [
    {
      id: 19,
      title: "Computer Lab",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=800&auto=format&fit=crop",
      category: "facilities",
    },
    {
      id: 20,
      title: "Cafeteria",
      image: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=800&auto=format&fit=crop",
      category: "facilities",
    },
    {
      id: 21,
      title: "Student Residence",
      image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=800&auto=format&fit=crop",
      category: "facilities",
    },
    {
      id: 22,
      title: "Recreational Center",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
      category: "facilities",
    },
  ],
};

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const allItems = Object.values(galleryItems).flat();
  
  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-scale-in');
                item.classList.remove('opacity-0');
              }, index * 100);
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
  }, [activeCategory]);
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-4">Campus Gallery</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our beautiful campus and vibrant community through these images
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <Tabs 
            defaultValue="all" 
            className="w-full animate-fade-in mb-12" 
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            <div className="flex justify-center">
              <TabsList className="w-full max-w-xl">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Image className="h-4 w-4" /> All
                </TabsTrigger>
                <TabsTrigger value="campus" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Campus
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Events
                </TabsTrigger>
                <TabsTrigger value="students" className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> Students
                </TabsTrigger>
                <TabsTrigger value="facilities" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Facilities
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
          
          {/* Gallery Grid */}
          <div 
            ref={galleryRef} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="gallery-item relative overflow-hidden rounded-lg cursor-pointer opacity-0 group"
                onClick={() => setLightboxImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Image className="h-16 w-16 mx-auto text-college-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No images found</h3>
              <p className="text-gray-500 dark:text-gray-400">There are no images in this category</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2"
              onClick={() => setLightboxImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={lightboxImage} 
              alt="Gallery Image"
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
